import axios from 'axios'
import React, { useState } from 'react'

function AddProduct() {
    const [product,setProduct]=useState({
        name:'',price:'',brand:'',image:''
    })
    let productDetail=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    let handleSubmit=async (e)=>{
        e.preventDefault()
        let res= await axios.post('http://localhost:3000/product',product)
        console.log(res)

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name='name'  onChange={productDetail}/><br />
        <label htmlFor="">Price</label>
        <input type="Number" name='price' onChange={productDetail} /><br />
        <label htmlFor="">Brand</label>
        <input type="text" name='brand' onChange={productDetail} /><br />
        <label htmlFor="">Image</label>
        <input type="text" name='image'  onChange={productDetail}/><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddProduct
