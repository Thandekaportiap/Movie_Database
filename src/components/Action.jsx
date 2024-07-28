
import React from 'react'
import Data from "../db.json"

export default function Action() {
  return (
    <div>
      {
        Data.map((item, index) => (
          <div key={`action-${index}`}>
            <h2>{item.Action['0'].title}</h2>
            <p>{item.Action['0'].Discription}</p>
          </div>
        ))
      }
        
    </div>
  )
}
