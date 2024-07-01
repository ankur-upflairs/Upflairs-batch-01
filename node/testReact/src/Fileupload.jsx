import axios from 'axios';
import React, { useState } from 'react'

function Fileupload() {
    const [image,setImage]=useState(null)
    const [name,setName]=useState('')

    let showImage=(e)=>{
        setImage(e.target.files[0]);console.log(image)
    }
    let sendImage= async (e)=>{
        e.preventDefault()
        let formData=new FormData()
        formData.append('name',name)
        formData.append('image',image)  
        let res=await axios.post('http://localhost:3000/product/upload',formData)
        console.log(res.data)   
        // console.log(image)
    }

  return (
    <div>
        <form onSubmit={sendImage}>
            <label htmlFor="">name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/><br />
        <label htmlFor="">upload image</label> 
        <input type="file" name="image" id=""  
        
        onChange={showImage}/> <br />
        <input type="submit" value="submit" />
        </form>
        <img src="http://localhost:3000/image-1719642218242.jpeg" alt="" />
    </div>
  )
}

export default Fileupload
