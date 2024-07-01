import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import AddProduct from '../AddProduct'
import Products from '../Products'
import Fileupload from './Fileupload'

function App() {
 
  return (
    <>
      {/* <AddProduct/> */}
      {/* <Products/> */}
      <Fileupload/>
    </>
  )
}

export default App
