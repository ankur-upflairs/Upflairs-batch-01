const express=require('express')
const cors=require('cors')

const app=express()

const productRoutes=require('./routes/product.js')

app.use(cors())
// app.use(cors({
//     origin:'*',
//     methods:['GET'],
//     allowedHeaders:[]
// }))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/product',productRoutes)



app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')

})

