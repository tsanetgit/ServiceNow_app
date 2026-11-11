import React, { useEffect, useRef, useState } from 'react'
import { Alert } from '@servicenow/react-components/Alert'
import { Button } from '@servicenow/react-components/Button'
import { Heading } from '@servicenow/react-components/Heading'
import { Input } from '@servicenow/react-components/Input'
import { LabelValueStacked } from '@servicenow/react-components/LabelValueStacked'
import { Loader } from '@servicenow/react-components/Loader'
import { Select } from '@servicenow/react-components/Select'
import { Textarea } from '@servicenow/react-components/Textarea'
import { display } from '../utils/fields'
import FormField from './form-field'
import { getCase, getCurrentUser, getPartnerForm, searchPartners, submitCase } from './services'
import './app.css'

const PRIORITIES = [
    { id: 'LOW', label: 'Low' },
    { id: 'MEDIUM', label: 'Medium' },
    { id: 'HIGH', label: 'High' },
]
// Case priority 1 Critical and 2 High are High for TSANet, 3 Moderate is Medium, 4 Low is Low.
const tsanetPriority = (casePriority) => ({ '1': 'HIGH', '2': 'HIGH', '3': 'MEDIUM' })[casePriority?.value] || 'LOW'

const SECTIONS = { CONTACT_SECTION: 0, COMMON_CUSTOMER_SECTION: 1, PROBLEM_SECTION: 2 }
const SEARCH_DELAY_MS = 300

// The partner's customer fields, filled in from the case's account and contact.
const prefill = (hostCase) => ({
    'Customer Company': display(hostCase['account.name']),
    'Customer Name': display(hostCase['contact.name']),
    'Customer Email': display(hostCase['contact.email']),
    'Customer Phone Including Country Code': display(hostCase['contact.phone']),
})

// Admin notes and escalation instructions come as HTML from TSANet; show their text only.
const plainText = (html) => new DOMParser().parseFromString(String(html || ''), 'text/html').body.textContent?.trim()

export default function App() {
    const caseId = new URLSearchParams(window.location.search).get('sysparm_case') || ''
    const [hostCase, setHostCase] = useState(null)
    const [agent, setAgent] = useState(null)
    const [error, setError] = useState('')

    const [term, setTerm] = useState('')
    const [partners, setPartners] = useState([])
    const [searching, setSearching] = useState(false)
    const [partner, setPartner] = useState(null)
    const [form, setForm] = useState(null)
    const [values, setValues] = useState({})
    const [summary, setSummary] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('LOW')
    const [stepError, setStepError] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [created, setCreated] = useState(null)
    const searchTimer = useRef(null)
    // Each search and form load takes a number; an answer whose number is no longer current is dropped.
    const searchSeq = useRef(0)
    const formSeq = useRef(0)

    useEffect(() => {
        if (!/^[0-9a-f]{32}$/.test(caseId)) {
            setError('Open this from a case: ⋯ Create TSANet Case.')
            return
        }
        Promise.all([getCase(caseId), getCurrentUser()])
            .then(([c, u]) => {
                setHostCase(c)
                setAgent(u)
                setSummary(c.short_description?.value || '')
                setDescription(c.description?.value || '')
                setPriority(tsanetPriority(c.priority))
            })
            .catch((e) => setError(e.message))
    }, [caseId])

    const search = (text) => {
        setTerm(text)
        clearTimeout(searchTimer.current)
        const seq = ++searchSeq.current
        setPartners([])
        // Searching from the first keystroke, so "No partners found" doesn't flash during the delay.
        setSearching(!!text.trim())
        if (!text.trim()) return
        searchTimer.current = setTimeout(() => {
            setStepError('')
            const current = () => seq === searchSeq.current
            searchPartners(text.trim())
                .then((found) => current() && setPartners(found))
                .catch((e) => current() && setStepError(e.message))
                .finally(() => current() && setSearching(false))
        }, SEARCH_DELAY_MS)
    }

    const changePartner = () => {
        formSeq.current++
        setPartner(null)
        setForm(null)
        setStepError('')
    }

    const choose = (p) => {
        const seq = ++formSeq.current
        setPartner(p)
        setForm(null)
        setStepError('')
        getPartnerForm(p)
            .then((f) => {
                if (seq !== formSeq.current) return
                const filled = prefill(hostCase)
                const initial = {}
                for (const field of f.customFields || []) initial[field.fieldId] = field.value || filled[field.label] || ''
                setValues(initial)
                setForm(f)
            })
            .catch((e) => seq === formSeq.current && setStepError(e.message))
    }

    const fields = [...(form?.customFields || [])]
        .filter((f) => f.type !== 'HIDDEN')
        .sort((a, b) => (SECTIONS[a.section] ?? 9) - (SECTIONS[b.section] ?? 9) || a.displayOrder - b.displayOrder)

    const missing = [
        !summary.trim() && 'Summary',
        !description.trim() && 'Description',
        ...fields.filter((f) => f.required && !String(values[f.fieldId] || '').trim()).map((f) => f.label),
    ].filter(Boolean)

    const submit = () => {
        setSubmitting(true)
        setStepError('')
        submitCase({
            caseSysId: caseId,
            companyId: partner.companyId,
            departmentId: partner.departmentId,
            summary,
            description,
            priority,
            fields: values,
        })
            .then(setCreated)
            .catch((e) => setStepError(e.message))
            .finally(() => setSubmitting(false))
    }

    if (error) return <Alert status="critical" header="Create TSANet Case" content={error} />
    if (!hostCase || !agent) return <Loader label="Loading the case" />
    if (created)
        return (
            <Alert
                status="positive"
                header={`${created.number} sent to ${created.partner}`}
                content={`TSANet has the request (token ${created.token}). It shows in the case's TSANet Cases list.`}
            />
        )

    return (
        <div className="create-case">
            <Heading label="1. Case details" level={2} variant="title-secondary" />
            <LabelValueStacked
                align="horizontal-equal"
                items={[
                    { label: 'Case', value: display(hostCase.number) },
                    { label: 'Account', value: display(hostCase.account) },
                    { label: 'Engineer', value: display(agent.name) },
                    { label: 'Email', value: display(agent.email) },
                    { label: 'Phone', value: display(agent.phone) },
                ]}
            />

            <Heading label="2. Partner" level={2} variant="title-secondary" />
            {partner ? (
                <div className="create-case__chosen">
                    <span>{partner.label}</span>
                    <Button label="Change partner" variant="secondary" size="sm" onClicked={changePartner} />
                </div>
            ) : (
                <>
                    <Input
                        label="Search TSANet partners"
                        placeholder="Company or department name"
                        value={term}
                        onInput={(e) => search(e.detail.payload.fieldValue ?? '')}
                    />
                    {searching && <Loader label="Searching" />}
                    {!searching && !stepError && term.trim() && !partners.length && <p className="create-case__hint">No partners found.</p>}
                    <ul className="create-case__partners">
                        {partners.map((p) => (
                            <li key={`${p.companyId}:${p.departmentId ?? 'none'}`}>
                                <button type="button" onClick={() => choose(p)}>
                                    <strong>{p.label}</strong>
                                    {(p.tags || []).map((t) => (
                                        <span className="create-case__tag" key={t.tag}>
                                            {t.tag}
                                        </span>
                                    ))}
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {stepError && <Alert status="critical" content={stepError} />}

            {partner && !form && !stepError && <Loader label="Loading the partner's form" />}
            {partner && form && (
                <>
                    <Heading label="3. Request" level={2} variant="title-secondary" />
                    {plainText(form.adminNote) && <Alert status="info" header="From the partner" content={plainText(form.adminNote)} />}
                    <div className="create-case__fields">
                        <Input label="Summary" required value={summary} onInput={(e) => setSummary(e.detail.payload.fieldValue ?? '')} />
                        <Textarea
                            label="Description"
                            required
                            autoresize
                            value={description}
                            onInput={(e) => setDescription(e.detail.payload.fieldValue ?? '')}
                        />
                        <Select
                            label="Priority"
                            required
                            items={PRIORITIES}
                            selectedItem={priority}
                            onSelectedItemSet={(e) => setPriority(String(e.detail.payload.value))}
                        />
                        {fields.map((f) => (
                            <FormField
                                key={f.fieldId}
                                field={f}
                                value={values[f.fieldId] ?? ''}
                                onChange={(v) => setValues((old) => ({ ...old, [f.fieldId]: v }))}
                            />
                        ))}
                    </div>
                    {plainText(form.escalationInstructions) && (
                        <Alert status="info" header="Escalation instructions" content={plainText(form.escalationInstructions)} />
                    )}
                    <div className="create-case__actions">
                        {missing.length > 0 && <span className="create-case__hint">Required: {missing.join(', ')}</span>}
                        <Button
                            label={submitting ? 'Submitting…' : 'Submit to TSANet'}
                            variant="primary"
                            disabled={submitting || missing.length > 0}
                            onClicked={submit}
                        />
                    </div>
                </>
            )}
        </div>
    )
}
