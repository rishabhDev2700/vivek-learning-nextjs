"use client"

import Link from "next/link";
import { fruits } from "@/data/fruits";
import Card from "@/components/card";
export default function Home() {
  const filtered = fruits.filter(fruit=>fruit.qnty>20)
  const data = filtered.map(fruit => <Card name={fruit.name} qnty={fruit.qnty} />)
  return (
    <div className="flex flex-col">
      This is Home Page
      <Link className="border bg-blue-400 p-2" href="/learning">Learning Page</Link>

      <div className="flex flex-wrap w-2/3 mx-auto">
      {data}
      </div>

    </div>
  );
}
