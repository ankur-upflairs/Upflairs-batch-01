import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './redux/todoActions'

function Todo() {
    let [text,setText]=useState('')
    let todo=useSelector(state=>state.todo)
    let dispatch=useDispatch()
  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
        <button onClick={()=>dispatch(addTodo(text))}>add</button>
        <ul>
      {todo.map((v,i)=>{
        return <li>{v.task}</li>
      })}
      </ul>
    </div>
  )
}

export default Todo
