"use client"
import Card from '@/components/card'
import { useEffect, useState } from 'react'

export default function page() {
    const [products, setProducts] = useState([])
    const [data, setData] = useState({name:"vivek",location:"Europe"})
    useEffect(
        () => {
            async function fetchProducts() {
                const response = await fetch("https://dummyapi.online/api/products")
                const data = await response.json()
                setProducts(data)
                console.log(data)

            }
            console.log("Fetching products");
            fetchProducts()
        },
        []// dependency array
    )
    console.log(data)
    useEffect(() => {
        setData({...data,name:"Dheyy"})
    },[])
    const cards = products.map(c => <Card {...c} thumbnailImage={c.thumbnailImage}  randomText="this is random text"/>)
    return (
        <div className="flex flex-col justify-center h-96 items-center">
            <h1>Products</h1>
            <div className="flex flex-wrap w-2/3 mx-auto">
                {cards}

            </div>
            {data.name}
            {data.location}
        </div>
    )
}
