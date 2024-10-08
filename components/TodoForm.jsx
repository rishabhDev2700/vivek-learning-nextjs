"use client"
import { useState, useContext } from 'react'
import { TodoContext } from './todo-context'


export default function TodoForm() {
    const { todos, setTodos } = useContext(TodoContext)
    const [data, setData] = useState('')

    async function addTodo() {
        setTodos([...todos, data])
    }
    return (
        <div className="p-2 m-12 bg-white text-slate-800">
            <input className="border border-black p-4" type="text" placeholder="Enter the todo" onChange={e => setData(e.target.value)} />
            <button className="bg-blue-500 text-white p-4" onClick={addTodo}>Add to the Todos</button>
        </div>
    )
}
