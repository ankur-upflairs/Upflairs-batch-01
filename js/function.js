//fn is a block of code to perform some specific tast that can be reused
//declaration=>
//1.declare
// console.log(sum(3,8))
// function sum(a,b){
//     // console.log(a+b)
//     return a+b
// }
//hoisting => hoisted
//2.function expression=>

//     let cube = function(a){
//         return a**3
//     }

//  console.log(cube(5))
 //not hoisted
// 3.arrow fn => es6
let avg=(a,b,c)=>{
    return (a+b+c)/3
}
let avrg=(a,b,c)=>(a+b+c)/3
let cube=a=>a**3
//dont have this keyword
//not hoisted