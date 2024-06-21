import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from './redux-toolkit/counterReducer'

function Counter() {
    let count=useSelector(state=>state.counter)
    let dispatch=useDispatch()

  return (
    <div>
      {count}
      <button onClick={()=>dispatch(increase(2))}>add</button>
    </div>
  )
}

export default Counter
