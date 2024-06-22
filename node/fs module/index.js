let fs=require('fs')

//synchronous function
// let data=fs.readFileSync('sample.txt','utf-8')

// console.log(data)

// fs.writeFileSync('sample.txt','writeFileSync method')
// fs.writeFileSync('sample1.txt','writeFileSync method')


// fs.appendFileSync('sample.txt','\nthis is appended data')
// fs.appendFileSync('sample2.txt','\nthis is appended data')

// read a html file (index.html) and change title to fs module
// write 10-20 table each in different file (table of 10.txt,table of 11.txt)

// async programming => async programming is a concept to run some code asynchronously (in background)
// async function is removed from main thread it , executes parallel (in background) when task completes
//it wait till all synchronous code execution after that asynchronous code is executed 
//to manage that there is a eventloop
//every asynchronous task is associated with a callback function

// console.log('before async')
// setTimeout(()=>{
//     console.log('timer')
// },0)
// console.log('after async')

//asynchronous functions

function show(params) {
    console.log(params)
}

fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err ) console.log(err)
    // console.log(data)
    show(data)
})

fs.writeFile('sample.txt','writeFileSync method',(err)=>{
    if (err) console.log(err)
})

fs.appendFile('sample.txt','file is appeded',(err)=>{
    if (err) console.log(err)
    
})
