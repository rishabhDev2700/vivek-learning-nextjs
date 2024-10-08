"use client"
import { useContext } from 'react'
import { TodoContext } from './todo-context'
export default function Alist() {
    const { todos } = useContext(TodoContext)
    const filtered = todos.filter(f=>f.startsWith("A"))
    const items = filtered.map((item, i) => <div className="p-2 m-1 border" key={i}>{item}</div>)
    return (
        <div>
            <div className="p-4 bg-white text-black">Alist</div>
            <div>{items}</div>
        </div>
    )
}
