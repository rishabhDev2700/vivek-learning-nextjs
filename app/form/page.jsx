"use client"
import { useState } from 'react'

export default function Page() {
    const [name, setName] = useState('Rishabh')
    const [email, setEmail] = useState('@gmail.com')
    const [location, setLocation] = useState('cester')
    const [address, setAddress] = useState("street- , ,United Kingdom")
    // const [data, setData] = useState({
    //     name: "rishabh", email: "@gmail.com", location: "cester", address: "street- , ,United Kingdom"})
    console.log(`Name:${name}\t Email:${email} \tLocation:${location}`)

    async function handleSubmission(e) {
        e.preventDefault()
        const response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({ name, email, location, address })
        })
        const data = await response.json()
        console.log(data)
    }
    return (
        <>
            <div>Page</div>
            <form className="grid grid-cols-2 w-2/3 mx-auto">
                <input className="m-2 border p-2 text-black" type="text" placeholder="Name" onChange={e => setName(e.target.value)} value={name}></input>
                <input className="m-2 border p-2 text-black" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}></input>
                <input className="m-2 border p-2 text-black" type="text" placeholder="Location" onChange={e => setLocation(e.target.value)} value={location}></input>
                <textarea className="m-2 border p-2 text-black col-span-2 row-span-3" rows="5" placeholder="Textarea" onChange={e => setAddress(e.target.value)} value={address}></textarea>
                <button className="p-2 bg-blue-500" onClick={(e) => handleSubmission(e)}>Send</button>
            </form>
        </>
    )
}
