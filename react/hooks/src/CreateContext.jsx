import React, { createContext } from 'react'
import CompA from './components/CompA'

export let userContext=createContext()
//first create context
//use provider component to pass value
function CreateContext() {
    let user='pawan'
  return (
    <div>
      <userContext.Provider value={user}>
        <CompA/>
      </userContext.Provider>
    </div>
  )
}

export default CreateContext
