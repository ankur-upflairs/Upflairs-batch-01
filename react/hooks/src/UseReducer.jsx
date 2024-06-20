import React, { useReducer, useState } from 'react'
let initialState = [{ id: 1, task: 'wake up at 7', isCompelete: false }]

let reducer = (state, action) => {
    let newTodo = [...state]
    if (action.type == 'add') {
        (state.length > 0 ?
            newTodo.push({
                id: state[state.length - 1].id + 1,
                task: action.payload,
                isCompelete: false
            }) :
            newTodo.push({
                id: 1, task: action.payload,
                isCompelete: false
            }))
        return newTodo
    }
    else if (action.type == 'delete') {
        let index = newTodo.indexOf(newTodo.find((v, i) => v.id == action.payload))
        newTodo.splice(index, 1)

        return newTodo
    }
    else if(action.type=='complete'){
        let index = newTodo.indexOf(newTodo.find((v, i) => v.id == action.payload))
        newTodo[index].isCompelete=true
        console.log(newTodo)
        return newTodo
    }

}

//action creator function

let add=(text)=>{
    return {type:'add',payload:text}
}

function UseReducer() {
    const [toDo, dispatch] = useReducer(reducer, initialState)
    const [text, setText] = useState('')
    
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={() => { dispatch(add(text)); setText('') }}>add</button><br />
            {toDo.map((v, i) => {
                return <li>{v.task}
                    <button onClick={() => dispatch({ type: 'delete', payload: v.id })}>delete</button>
                    <button onClick={()=>dispatch({type:'complete',payload:v.id})}>complete</button>
                    </li>
            })}

        </div>
    )
}

export default UseReducer
