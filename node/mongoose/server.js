const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express()
const productRoutes=require('./routes/product.js')

mongoose.connect("mongodb+srv://ankurupflairs:ZvJGVXaYs9TDLDcF@cluster0.mk94png.mongodb.net/products")

app.use(cors())
// app.use(cors({
//     origin:'*',
//     methods:['GET'],
//     allowedHeaders:[]
// }))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/product',productRoutes)




app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')

})

