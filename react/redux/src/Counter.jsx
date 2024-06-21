import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease } from './redux/counterAction'

function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
      counter {count}
      <button onClick={()=>dispatch(increase())}>increase</button>
      <button onClick={()=>dispatch(decrease())}>decrease</button>
    </div>
  )
}

export default Counter
