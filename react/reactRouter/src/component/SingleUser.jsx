import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SingleUser() {
    let {id}=useParams()
    let [users, setUsers] = useState([])
    let navigate=useNavigate()

    useEffect(() => {
        async function getUsers() {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUsers(res.data)
            console.log(res.data)
        }
        getUsers()
        
    },[])
  return (
    <div>
        {id==5? <Navigate to={'/user'}/>:null}
        <button onClick={()=>navigate('/')}>home</button>
      single user id= {id}
    </div>
  )
}

export default SingleUser
