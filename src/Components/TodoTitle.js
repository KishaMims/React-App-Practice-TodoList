import React from 'react'

export default function TodoTitle(props) {
    // props is passing is back down
     
  return (
    <div className="child">
        <h1>Add to your to list below!</h1>
        <button onClick={() => props.changeWord('Grocery List')}>Click to Change Title</button>
         {/* arrow function to change title on click */}
    </div>
  )
}
