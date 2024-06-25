const express=require('express')
const app=express()

const productRoutes=require('./router/product.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/product',productRoutes)



app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')

})

