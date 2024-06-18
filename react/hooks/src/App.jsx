import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './UseState'
import UseEffect from './UseEffect'
import AxiosLib from './AxiosLib'
import UseRef from './UseRef'

function App() {
  //hooks connects functional components with react featues
  //always write 'use' keyword before name
  //always used inside functional component and top of component
  //dont use/declare inside condition or loop 

  return (
    <>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <AxiosLib/> */}
      <UseRef />
    </>
  )
}

export default App
