const http=require('node:http')
const fs=require('fs')
const path=require('path')

// let server=http.createServer((request,response)=>{
//     if(request.url=='/'){
//         response.write('this is home page')
//         response.end()
//     }
//     else if(request.url=='/products'){
//         // response.write('this is product page')
//         response.end('this is product page')
//     }
//     // console.log(request.url)
//     // response.write('hello world')
//     // response.end()

// })

let queryModule=require('querystring')
let url=require('url')

let indexHtml=fs.readFileSync('index.html','utf-8')
let userHtml=fs.readFileSync(path.join(__dirname,'adduser.html'),'utf-8')
let userData=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
]

let requestListner=(req,res)=>{
    let {pathname,query}=url.parse(req.url)

    if(req.url=='/'){
        res.setHeader('Content-Type','text/html')
        res.writeHead(200)
        res.end(indexHtml)
    }
    else if(req.url=='/users'){
        res.setHeader('Content-Type','application/json')
        res.writeHead(201)
        res.end(JSON.stringify(userData))
    }
    else if(pathname=='/adduser' && req.method=='GET'){
        // console.log(req.method)
        // console.log(req.url)
        if(query) {
            let q=queryModule.parse(query)
            // console.log(q)
        }
        res.setHeader('Content-Type','text/html')
        res.writeHead(200)
        res.end(userHtml)
    }
}

let server=http.createServer(requestListner)


server.listen(3000,'localhost',()=> {
    console.log('server is running on port 3000....')
})
