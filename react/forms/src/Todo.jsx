import React, { useState } from 'react'

function Todo() {
    const [text, setText] = useState('')
    const [todo, setTodo] = useState([])
    let addTodo = () => {
        // let newTodo=[...todo]
        // newTodo.push(text)
        // setTodo(newTodo)
        // setText('')
        let newTodo = [...todo]
        
        if (todo.length >= 1) {
            let newId = todo[todo.length - 1].id + 1
            newTodo.push({ id: newId, task: text, isComplete: false })
        }
        else newTodo.push({ id: 1, task: text, isComplete: false })
        setTodo(newTodo)
        setText('')
        console.log(todo)
    }
    let deleteTast = (i) => {
        let newTodo = [...todo]
        newTodo.splice(i, 1)
        setTodo(newTodo)

        // setTodo(todo.filter((v,index)=>index!=i))
    }
    let taskComplete = (i) => {
        let newTodo = [...todo]
        newTodo[i].isComplete = true
        setTodo(newTodo)
    }
    return (<>
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={addTodo}>Add</button>
        </div>
        <ol>
            {todo.map((v, i) => {
                return <li>
                    <span style={{textDecoration:v.isComplete?'line-through': 'none'}}>{v.task} </span>
                    <button onClick={() => deleteTast(i)}>delete</button>
                    <button onClick={() => taskComplete(i)}>complete</button>
                </li>
            })
            }
        </ol>
    </>

    )
}

export default Todo
