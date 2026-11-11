import React from 'react'
import { Input } from '@servicenow/react-components/Input'
import { Select } from '@servicenow/react-components/Select'
import { Textarea } from '@servicenow/react-components/Textarea'

// One field of the partner's form (the API's FieldMetadataDTO). HIDDEN fields are
// never rendered: they go back to TSANet with the value the form came with.
const INPUT_TYPES = { EMAIL: 'email', PHONE: 'tel', INTEGER: 'number', URL: 'url' }

// SELECT options are one per line; some forms send the line break escaped.
export const selectOptions = (options: string) =>
    String(options || '')
        .replace(/\\n/g, '\n')
        .split(/\r?\n/)
        .map((v) => v.trim())
        .filter(Boolean)

const items = (values: string[]) => values.map((v) => ({ id: v, label: v }))

export default function FormField({ field, value, onChange }) {
    const common = { label: field.label, required: field.required }

    if (field.type === 'SELECT')
        return (
            <Select
                {...common}
                items={items(selectOptions(field.options))}
                selectedItem={value || undefined}
                onSelectedItemSet={(e) => onChange(String(e.detail.payload.value))}
            />
        )

    if (field.type === 'TIERSELECT') return <TierSelect {...common} field={field} value={value} onChange={onChange} />

    if (field.type === 'TEXT')
        return (
            <Textarea {...common} value={value} autoresize onInput={(e) => onChange(e.detail.payload.fieldValue ?? '')} />
        )

    return (
        <Input
            {...common}
            type={INPUT_TYPES[field.type] || 'text'}
            value={value}
            onInput={(e) => onChange(e.detail.payload.fieldValue ?? '')}
        />
    )
}

// Nested choices (selections with children): one dropdown per level, the value is the path, "A:B:C".
function TierSelect({ field, value, onChange, label, required }) {
    const path = value ? String(value).split(':') : []
    const levels = []
    let choices = field.selections || []
    for (let i = 0; choices.length; i++) {
        levels.push(choices)
        const picked = choices.find((c) => c.value === path[i])
        choices = picked?.children || []
    }
    return (
        <>
            {levels.map((level, i) => (
                <Select
                    key={i}
                    label={i === 0 ? label : undefined}
                    required={required}
                    items={items(level.map((c) => c.value))}
                    selectedItem={path[i]}
                    onSelectedItemSet={(e) => onChange([...path.slice(0, i), e.detail.payload.value].join(':'))}
                />
            ))}
        </>
    )
}
