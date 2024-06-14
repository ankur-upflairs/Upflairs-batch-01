import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Posts/> */}
     <Friends/>
    </>
  )
}

export default App
