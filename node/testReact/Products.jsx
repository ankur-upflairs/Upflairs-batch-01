import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        let getData= async ()=>{
            let res= await axios.get('http://localhost:3000/product')
            console.log(res.data)
            setProducts(res.data.data)
        }
        getData()
    },[])

    let deleteProduct=async (id)=>{
        let res = await axios.delete(`http://localhost:3000/product/${id}`)
        console.log(res.data)
    }
    let getOneProduct=async (id)=>{
        let res=await axios.get(`http://localhost:3000/product/${id}`)
        console.log(res.data)
    }

  return (
    <div>
      {products.map((v,i)=>{
        return <li>{v.name} 
        <button onClick={()=>deleteProduct(v._id)}>delete</button>
        <button onClick={()=>getOneProduct(v._id)}>get this Product</button>
        </li>
      })}
    </div>
  )
}

export default Products
