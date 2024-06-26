import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  async function getdata() {
   let res=await axios.get('http://localhost:3000/product')
   console.log(res.data)
    
  }
  async function senddata() {
    let res=await axios.post('http://localhost:3000/product',{name:'sachin'})
    console.log(res.data)
     
   }
  useEffect(()=>{
    getdata()
    senddata()
  },[])
  return (
    <>
      
    </>
  )
}

export default App
