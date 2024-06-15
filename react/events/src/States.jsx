import React, { useState } from 'react'

function States() {
    
    const [state,setState]=useState(0)
    //state is components memory
    //when state changes component re-renders
    //value saved till next render
    //we can't change state directly
    //state is immutable
    // to change the state use the state set function
    //state can not be used outside a component

    let count=0

    function showCount(){
        count++
        alert(`button clicked ${count}`)
    }

    function updateState(){
        setState(5)
    }
    
  return (
    <div>
        <p>{count}</p>
        <p>{state}</p>
      <button onClick={showCount}>click here</button>
      <button onClick={updateState}>update State</button>

    </div>
  )
}

export function Counter() {
    const [count,setcount]=useState(0)

    function increase(){
        setcount(count + 1)
    }
    return <>
    <p>{count}</p>
    <button onClick={increase}>increase</button>
    </>

}


export default States
