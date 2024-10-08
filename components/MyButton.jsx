
export default function MyButton({updator,children}) {
  return (
      <button onClick={updator} className="px-12 py-4 text-4xl bg-blue-500 text-white">
          {children}
      </button>  )
}
