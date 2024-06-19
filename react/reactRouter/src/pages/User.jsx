import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        async function getUsers() {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        }
        getUsers()
    },)
    return (
        <div>
            <ol>
                {users.map((v, i) => {
                    return <li><Link to={`${v.id}`}>{v.name}</Link></li>
                })}
            </ol>

        </div>
    )
}

export default User
