"use client"
import Card from '@/components/card'
import MyButton from '@/components/MyButton'
import { useState } from 'react'

export default function page() {
    console.log("Page Rendered")
    const [count, setCount] = useState(10)
    
    return (
        <>
            <div>State page</div>
            <div>

                <div className="w-52 mx-auto p-8 bg-amber-600 text-white text-center">{count}</div>
                <div className="flex p-8 w-1/2 mx-auto justify-around">
                    <MyButton updator={() => setCount(count + 1)}>
                        <img src=""/> j
                    </MyButton>
                    <MyButton updator={() => setCount(count - 1)}>-</MyButton>
                </div>
                <Card name={count}>

                </Card>
            </div>
        </>
    )
}
