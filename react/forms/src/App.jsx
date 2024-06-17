import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './Forms'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Forms/> */}
     <Todo/>
    </>
  )
}

export default App
