import React from 'react'

function Events() {
    function showMsg(a){
        alert(`button clicked ${a}`)
    }
    
  return (
    <div>
      <button onClick={showMsg}>click here</button>
      <button onClick={()=>showMsg('argument passed')}>function with argument</button>
    </div>
  )
}

export default Events
