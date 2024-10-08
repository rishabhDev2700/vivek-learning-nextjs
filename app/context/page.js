"use client"
import { useState } from "react"
import { TodoContext } from "@/components/todo-context"
import Container from "@/components/Container"
import TodoForm from "@/components/TodoForm"
export default function Page() {
    console.log("Page rerendered")
    const [todos, setTodos] = useState([])
    return (
        <TodoContext.Provider value={{todos,setTodos}}>
            <Container></Container>
            <TodoForm/>
        </TodoContext.Provider>
    )
}
