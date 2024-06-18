import React, { useRef, useState } from 'react'

function UseRef() {
    const [state,setState]=useState(0)
    const count= useRef(0)
    //useRef dont re-render
    //useRef save value b/w render
    
    const para=useRef(null)

    let change=()=>{
        para.current.style.color='red'
    }
  return (
    <div>
        <p ref={para}>count - {count.current} state - {state}</p>
        <button onClick={()=>setState(state+1)}>state</button>
        <button onClick={()=> count.current++}>count</button>
        <button onClick={change}>change color</button>
      
    </div>
  )
}

export default UseRef
