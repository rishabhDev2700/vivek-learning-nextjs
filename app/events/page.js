"use client"
export default function Page() {
    function pressed() {
        console.log("Clicked")
    }

    return (
        <div className="flex p-8 w-1/2 mx-auto justify-around">
            <button onClick={pressed}  className="px-12 py-4 text-4xl bg-blue-500 text-white">
                +
            </button>
            <button className="px-12 py-4 text-4xl bg-green-500 text-white">
                -
            </button>
        </div>
    )
}
