import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Counter from './Counter'
import Todo from './Todo'

function App() {
  

  return (
    <>
     <Provider store={store}>
      {/* <Counter/> */}
      <Todo/>
     </Provider>
    </>
  )
}

export default App
