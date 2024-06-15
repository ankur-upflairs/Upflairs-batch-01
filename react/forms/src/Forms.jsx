import React, { useState } from 'react'

function Forms() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    function changeName(e){
        // console.log(e.target.value)
        setName(e.target.value)
    }
    //type- onchange- changeName-setname(userinput)-rerender- now input is controlled because we are showing value
    //of name inside input

  return (
    <div>
      <form action="">
        <label htmlFor="">your name
        <input type="text" onChange={changeName} value={name} />
        </label>
       <br />
        <input type="text" onChange={(event)=>setPassword(event.target.value)}  />
      </form>
      {name}
    </div>
  )
}

export default Forms
