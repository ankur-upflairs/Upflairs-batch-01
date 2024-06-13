import React from 'react'

// function Student(props) {
//   console.log(props)
//   return (
//     <div>
//     <p>Name - {props.name}</p>
//     <p>Age - {props.age}</p>
//     <img src={props.image}/>
//     </div>
//   )
// }
function Student(props) {
  let {name,age,image}=props
  //destructuring
  // console.log(props)
  // let a=[34,45]
  // let [x,y]=a
  // console.log(x)
  // let obj ={name:'pankaj',age:34}
  // let {name,age}=obj
  // console.log(name)
  let style={}
  return (
    <div style={style}>
    <p>Name - {name}</p>
    <p>Age - {age}</p>
    <img src={image}/>
    </div>
  )
}


export default Student
