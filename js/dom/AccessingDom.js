// console.log(document.images)
// var a=document.getElementsByClassName('a')
// var a=document.getElementsByTagName('p')
// var a=document.getElementById('a')
// var a=document.querySelectorAll('#a')//write css selector
// var a=document.querySelector('.a')
// console.log(a)
//text - html - attributes - class - css
// text
let a=document.getElementById('a')
// console.log(a.innerText)
// console.log(a.textContent)
// a.innerText='<p>changed paragraph text</p>'
//html
// console.log(a.innerHTML)
// a.innerHTML='<b>change html</b>'
//attributes
// console.log(a.getAttribute('class'))
// a.setAttribute('style','color:red;')
// a.setAttribute('id','b')
// console.log(a)
//css
// a.style.color='green'
//in property name - remove hyphen and convert it into camel case
// a.style.fontSize='40px'
//class
a.classList.add('c')
// a.classList.remove('b')
a.classList.toggle('b')
