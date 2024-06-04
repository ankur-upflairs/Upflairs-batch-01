// let count = 1
// let increment = () => { console.log(count); count++ }

// let counting = setInterval(increment, 1000)
// let btn1=document.querySelectorAll('button')[0]

// btn1.addEventListener('click',function(){
//     clearInterval(counting)
// })
let msg=()=>{console.log('email sent')}
let sentMsg=setTimeout(msg,5000)

let btn2=document.querySelectorAll('button')[1]

btn2.addEventListener('click',function(){
    clearTimeout(sentMsg)
})