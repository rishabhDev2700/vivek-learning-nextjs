"use client"
import { useState, useEffect } from 'react'

const initState = { name: "", location: "", friends: [] }
export default function page() {
    const [data, setData] = useState(initState)
    const [friend, setFriend] = useState('')

    return (
        <>
            <div>page</div>
            <div className="text-white ">
                <div>
                    <div className="p-8">{data.name}</div>
                    <div className="p-8">{data.location}</div>
                </div>
                <ol>
                    {data.friends.map(f => <li key={f} className="p-2 m-2 border">{f}</li>)}
                </ol>
            </div>
            <div className="text-black">
                <input placeholder="Name" className="p-4 m-4" onChange={e => setData({ ...data, name: e.target.value })} />
                <input placeholder="Location" className="p-4 m-4" onChange={e => setData({ ...data, location: e.target.value })} />
                <div>
                    <input placeholder="Friend name" className="p-4 m-4" onChange={e => setFriend(e.target.value)} />
                    <button className="p-4 m-4 bg-blue-400" onClick={() => setData({ ...data, friends: [...data.friends, friend] })}>Add Friend</button>
                </div>
            </div>
        </>
    )
}
