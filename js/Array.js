// collection of datatypes
//indexing start with 0
let a=[3,true,'as']//3-0,true-1,'as'-2
//length = total no of elements
let b=[4,6,7,8,10,8]
// console.log(b[2])
// console.log(b.concat([34,23]))//return new array
// console.log(b.push(12))//add element in last
// console.log(b.pop())//removes element from last
// console.log(b.shift())//removes element from first
// console.log(b.unshift(23))//add element in first
// console.log(b.reverse())
// console.log(b.includes(6))
// console.log(b.join('-'))//convert array to string
// console.log(b.indexOf(9))
// console.log(b.lastIndexOf(8))
// console.log(b.slice(2))
// console.log(b.slice(1,4))
// console.log(b.splice(2,1,9,11,15))
// (index,deleteElement,addedElements)
//methods with callbacks=>
// console.log(b.findIndex(function(value,index,arr){
//  return value > 7
// }))
// console.log(b.find((val,i,arr)=>{
//     return val > 7
// }))
// b.forEach((v,i,arr)=>{
//     console.log(v*2)
// })
// let arr=['sunil','pankaj','gagan']
// document.write(`<ol>`)

// arr.forEach((v,i)=>{
//     document.write(`<li>name- ${v}</li>`)
// })
// document.write(`</ol>`)

// let table=[
//     ['pankaj',23,11],
//     ['sunil',26,12],
//     ['gagan',32,12]
// ]
// b.sort(function(a,b){return b-a})
// console.log(b.every((v,i,arr)=>{
//     return v>2
// }))
// console.log(b.some((v,i)=>{
//     return v>9
// }))
// console.log(b.filter((v,i)=>v>=7))
// console.log(b.map((v,i)=>{
//     return v*3
// }))
//acc,value,index,array

// console.log(b.reduce((acc,v,i,arr)=>{
//     return acc+=v
// },0))
//find the average of array using reduce
for (const i of b) {
    console.log(i)
}
for (const i in b) {
    console.log(i)        
}


console.log(b)