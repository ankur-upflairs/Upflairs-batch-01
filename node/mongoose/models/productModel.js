const mongoose = require('mongoose')

const ProductSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type: Number,
            required:true
        },
        brand:{
            type:String
        },
        image:{
            type:String,
        },
        created_At:{
            type:Date
        },
        updated_At:{
            type:Date
        }
    }
)

exports.Product=mongoose.model('Product',ProductSchema)

