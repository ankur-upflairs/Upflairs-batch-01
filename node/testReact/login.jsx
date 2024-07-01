import axios from 'axios'
import React from 'react'

function login() {
    let gettoken= async ()=>{
        let res=await axios.post('http://localhost:3000/user/login',{email:"abc@xyz.com",password:"abc123"}
        )
        let token= res.data.token
        localStorage.setItem('token',token)
    }

    let updateProduct=async (id)=>{
        let token= localStorage.getItem('token')
        let res= await axios.put(`http://localhost:3000/product/${id}`,{name:'xyz'},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
    }
  return (
    <div>
      
    </div>
  )
}



export default login
