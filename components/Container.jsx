import React from 'react'
import Alist from './Alist'
import Blist from './Blist'

export default function Container() {
  return (
      <div className="grid grid-cols-2">
          <div className="border">
              <Alist/>
          </div>
          <div className="border">
              <Blist/>
          </div>
    </div>
  )
}
