import React from 'react'

export default function Input(props) {
  return (
      <div>
          <input className="m-4 p-2 border" type="text"
              onChange={(e) => props.setQuery(e.target.value)} />
    </div>
  )
}
