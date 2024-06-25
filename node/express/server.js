const express=require('express')
const app=express()
const {products}=require('./products.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// middleware
// app.use((req,res,next)=>{
//     // console.log(req.hostname)
//     next()
// })
// app.use('/product',(req,res,next)=>{
//     console.log('req is made on product page')
//     next()
// })


app.get('',(req,res)=>{
    // res.send('<h1>hello world!</h1>')
    // res.send({name:'pankaj'})
    res.json({name:'sunil'})
})


app.get('/product',(req,res)=>{
    res.status(200).json({
        status:'success',
        data:products
    })
})

app.get('/product/:id',(req,res)=>{
    let {id}=req.params
    let product=products.find((v,i)=>v.id==id)
    if(product) res.status(200).json({
        status:'success',
        data:product
    })
    else res.status(400).json({
        status:'failed',
        msg:'product not found'
    })
})

app.post('/product',(req,res)=>{
    // console.log(req.body)
    let {name}=req.body
    let id= products[products.length-1].id + 1
    products.push({id,name})
    res.json({
        status:'success',
        data:{id,name}
    })
})

// dynamic routing
app.delete('/product/:id',(req,res)=>{
    let {id}=req.params 

    let product=products.find((v,i)=>v.id==id)
    if(product) {
        let index= products.indexOf(product)
        products.splice(index,1)        
        res.status(200).json({
        status:'success',
        msg:'product deleted'
    })}
    else res.status(400).json({
        status:'failed',
        msg:'product not found'
    })
    
})
app.put('/product/:id',(req,res)=>{
    let {id}=req.params 
    let {name}=req.body
    let product=products.find((v,i)=>v.id==id)
    if(product) {
        let index= products.indexOf(product)
         products.splice(index,1,{id,name})        
        res.status(200).json({
        status:'success',
        msg:'product updated'
    })}
    else res.status(400).json({
        status:'failed',
        msg:'product not found'
    })
})







// app.get('',(req,res)=>{
//     // res.send('<h1>hello world!</h1>')
//     // res.send({name:'pankaj'})
//     res.json({name:'sunil'})
// })


// app.get('/product',(req,res)=>{
//     // console.log(req.body)
//     // console.log('hello')
//     console.log(req.query)
//     res.status(200).send('this is all products page')
// })
// app.get('/product/:id',(req,res)=>{

//     res.send('this is single product page')
// })

// app.post('/product',(req,res)=>{
//     console.log(req.body)
//     res.send('product is added')
// })
// // dynamic routing
// app.delete('/product/:id',(req,res)=>{
//     console.log(req.params)
//     res.send('product is deleted')
// })
// app.put('/product/:id',(req,res)=>{
//     res.send('product is updated')
// })

app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')

})

