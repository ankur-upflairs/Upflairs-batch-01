import React, { useContext } from 'react'
import { userContext } from '../CreateContext'


function CompC() {
  
  let user=useContext(userContext)
  return (
    <div>
      compC {user}
    </div>
  )
}

export default CompC
