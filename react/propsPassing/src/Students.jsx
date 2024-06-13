import React from 'react'
import Student from './Student'
import { data } from './data'
import car1 from './assets/images/car1.webp'
function Students() {
    let style={display:'flex',justifyContent:'space-between',width:'100%'}
  return (
    <div style={style}>
      <Student name={data[0].name} age={data[0].age} image={data[0].image} />
      <Student name={data[1].name} age={data[1].age} image={data[1].image} />
      <Student {...data[2]} />
        <img src={car1} alt="" width={'200px'} />
        <img src="car1.webp" alt="" width={'50px'} />
       
    </div>
  )
}

export default Students
