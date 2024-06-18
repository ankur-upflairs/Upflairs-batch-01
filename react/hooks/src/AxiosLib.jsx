import axios from 'axios'
import React, { useEffect } from 'react'
import { getData, postData } from './CostumAxios'

function AxiosLib() {
    

    useEffect(()=>{
        let fetchData=async ()=>{
           let res= await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res.data)
        }
        fetchData()
    },[])

    let data={
        "userId": 190,
        "id": 1112,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }

    let sendData= async ()=>{
        let res= await axios.post('https://jsonplaceholder.typicode.com/posts',data)
        console.log(res)
    }

  return (
    <div>
      <button onClick={sendData}>post data</button>
    </div>
  )
}

export default AxiosLib
