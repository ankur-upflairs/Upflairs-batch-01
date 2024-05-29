//string is collection of characters/ normal text

let a='pankaj'
// a='pawan'
let b="aayush"
let age=45;
//template string- multiine string and dynamic value insertion
var c=`hello my name is ${b}
and my age is ${age}`

// console.log(c)
//indexing =>indexing starts with 0
//way to access elements/characters

// console.log(a[3])

//methods -
let str='     abcdefc    '
let str1='g,hi,jk'

// console.log(str.length)
// console.log(str.charAt(3))
// console.log(str.endsWith('elf'))
// console.log(str.startsWith('ab'))
// console.log(str.includes('bcda')) -important
// console.log(str.indexOf('c')) -important
// console.log(str.lastIndexOf('c'))
// console.log(str.padStart(10,'$'))
// console.log(str.repeat(3))
// console.log(str.replace('c','z')) important
// console.log(str.replaceAll('c','z'))
// console.log(str.trimStart())
// console.log(str.concat(str1)) //add two strings
// console.log(str1.slice(2,4))
console.log(str1.split(','))
