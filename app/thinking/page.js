"use client"
import Input from '@/components/Input'
import { Table } from '@/components/Table'
import { useState } from 'react'
const items = [
    { column1: 'Alice Anderson', column2: 'Architect' },
    { column1: 'Alice Abbott', column2: 'Accountant' },
    { column1: 'Bob Brown', column2: 'Business Analyst' },
    { column1: 'Bob Barker', column2: 'Brand Manager' },
    { column1: 'Charlie Chaplin', column2: 'Content Creator' },
    { column1: 'Charlie Carson', column2: 'Cloud Engineer' },
    { column1: 'David Davis', column2: 'Data Engineer' },
    { column1: 'David Dawson', column2: 'Digital Marketer' },
];


export default function Page() {
    const [query, setQuery] = useState("")
    const filteredList = items.filter(i => i.column1.toLowerCase().startsWith(query.toLowerCase()))

    return (
        <div>
            <Input setQuery={setQuery} />
            <Table items={filteredList} />
        </div>
    )
}
