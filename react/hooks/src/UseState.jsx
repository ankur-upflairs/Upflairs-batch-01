import React, { useState } from 'react'

function UseState() {
    const [state,setState]=useState(0)

    let increase=()=>{
        // setState(state+1)
        // setState(state+1)
        // setState(state+1)
        setState((preValue)=>{
            return preValue +1
        })
        setState((preValue)=>{
            return preValue +1
        })
        setState((preValue)=>{
            return preValue +1
        })
    }


  return (
    <div>
        {state}<br/>
      <button onClick={increase}>click here</button>
    </div>
  )
}


export default UseState
