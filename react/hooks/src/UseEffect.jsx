import React, { useEffect, useState } from 'react'

let x=2

function UseEffect() {
    //it is used to control side effects
    const [state,setState]=useState(0)
    const [count,setCount]=useState(0)

    let fetchData= async ()=>{
        let res= await fetch('https://jsonplaceholder.typicode.com/posts')
        let data= await res.json()
        console.log(data)
        setState(data)
    }
    //useEffect takes a cb fn and a dependency array
    //cb cann't be async
    //if no dependency array then useEffect runs on every render
    //if dependency array is blank then useEffect runs on only initial render
    //useEffect can be used multiple times


    // setState(x)
    useEffect(()=>{
         fetchData()

    },[])//dependency array
    //there can also use a cleanup fn to remove previous effects
    //cleanup runs before next useEffect run
    useEffect(()=>{
        console.log('useEffect called',count)

        return ()=>{
            console.clear()
        }
    },[count])

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>increase</button>
    </div>
  )
}

export default UseEffect
