import React, { useState } from 'react'

// function Forms() {
//     // const [name,setName]=useState('')
//     // const [password,setPassword]=useState('')
//     // function changeName(e){
//     //     // console.log(e.target.value)
//     //     setName(e.target.value)
//     // }
//     //type- onchange- changeName-setname(userinput)-rerender- now input is controlled because we are showing value
//     //of name inside input

//   return (
//     <div>
//       <form action="">
//         <label htmlFor="">your name
//         <input type="text" onChange={changeName} value={name} />
//         </label>
//        <br />
//         <input type="text" onChange={(event)=>setPassword(event.target.value)}  /> <br/>

//       </form>
//       {name}
//     </div>
//   )
// }

function Forms() {
  const [user,setUser]=useState({
    name:'',
    password:'',
    college:'',
    course:''
  })
  const [err,setErr]=useState( {
      name:false,
      password:false,
      college:false,
      course:false
    } )
    const [gender,setGender]=useState()
   function selectgender(x){
    setGender(x)
    console.log(gender)
   }
  let handleChange=(e)=>{
    // console.log(e.target.name,e.target.value)
    setUser({...user,[e.target.name]:e.target.value})
  }
  let handleSubmit=(e)=>{
    if(user.name.length<=4){
      setErr({...err,name:true})
    }else setErr({...err,name: false})

    e.preventDefault()
    console.log(user)
  }
return (
  <div>
    <form action=""  onSubmit={handleSubmit}>
      <label htmlFor="">your name
      <input type="text" onChange={handleChange} name='name' />
      </label><span>{err.name?'name must have 4 letters':''}</span>
     <br />
      <input type="text" onChange={handleChange} name='password' /> <br/>
      <input type="text" onChange={handleChange} name='college' /> <br/>
      <input type="text" onChange={handleChange} name='course' /> <br/>
      <input type="submit" value="submit"  />
      <p>choose your gender</p>
      <label htmlFor="">male</label>
      <input type="radio" onChange={()=>selectgender('male')} name='gender' /> <br/>
      <label htmlFor="">female</label>
      <input type="radio" onChange={()=>selectgender('female')} name='gender' /> <br/>

    </form>    
  </div>
)}



export default Forms
