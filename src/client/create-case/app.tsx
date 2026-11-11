import React, { useEffect, useState } from 'react'
import { Alert } from '@servicenow/react-components/Alert'
import { Button } from '@servicenow/react-components/Button'
import { Heading } from '@servicenow/react-components/Heading'
import { LabelValueStacked } from '@servicenow/react-components/LabelValueStacked'
import { Loader } from '@servicenow/react-components/Loader'
import { display } from '../utils/fields'
import { getCase, getCurrentUser } from './services'
import './app.css'

// PROVISIONAL(tsanetgit/ServiceNow_app#19): partner search, the partner's form and
// submit are placeholders until the API is connected; their design comes with it.
export default function App() {
    const caseId = new URLSearchParams(window.location.search).get('sysparm_case') || ''
    const [hostCase, setHostCase] = useState(null)
    const [agent, setAgent] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!/^[0-9a-f]{32}$/.test(caseId)) {
            setError('Open this from a case: ⋯ Create TSANet Case.')
            return
        }
        Promise.all([getCase(caseId), getCurrentUser()])
            .then(([c, u]) => {
                setHostCase(c)
                setAgent(u)
            })
            .catch((e) => setError(e.message))
    }, [caseId])

    if (error) return <Alert status="critical" header="Create TSANet Case" content={error} />
    if (!hostCase || !agent) return <Loader label="Loading the case" />

    return (
        <div className="create-case">
            <Heading label="1. Case details" level={2} variant="title-secondary" />
            <LabelValueStacked
                align="horizontal-equal"
                items={[
                    { label: 'Case', value: display(hostCase.number) },
                    { label: 'Short description', value: display(hostCase.short_description) },
                    { label: 'Priority', value: display(hostCase.priority) },
                    { label: 'Account', value: display(hostCase.account) },
                    { label: 'Engineer', value: display(agent.name) },
                    { label: 'Email', value: display(agent.email) },
                    { label: 'Phone', value: display(agent.phone) },
                ]}
            />
            <Heading label="2. Partner" level={2} variant="title-secondary" />
            <Alert status="info" content="Partner search becomes available once the TSANet API is connected." />
            <Heading label="3. Partner form" level={2} variant="title-secondary" />
            <Alert status="info" content="The partner's own form loads here once the TSANet API is connected." />
            <div className="create-case__actions">
                <Button label="Submit to TSANet" variant="primary" disabled />
            </div>
        </div>
    )
}
