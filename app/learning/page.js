import React from 'react'
// using named export
import { logMyName } from "@/lib/log"
// in default export you can call it anything
import Link from 'next/link'
import "./style.css"
import { fruits } from '@/data/fruits'
export default function page() {
    const filtered = fruits.filter(fruit=>fruit.qnty>20)
    const data = filtered.map(f => <div key={f.name}  className="border-2 rounded-xl border-black my-2 p-2">{f.name}----{f.qnty}</div>)
    return (
        <>
            <div className="mystyle"> This is learning page</div>
            <div className="flex flex-col items-center">
                {/* {data} */}
            </div>
            <Link className="border bg-blue-400 p-2" href="/">Home Page</Link>
        </>
        // JSX
    )
}