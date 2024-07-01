const { products } = require('../products.js')
const { Product } = require('../models/productModel.js')

exports.allProducts = async (req, res) => {

    let allProduct = await Product.find({})
    // console.log(allProduct)
    res.status(200).json({
        status: 'success',
        data: allProduct
    })
}

exports.singleProduct =async (req, res) => {
    let { id } = req.params

    try {
        let product=await Product.findById(id)

        res.status(200).json({
           status: 'success',
           data: product
       })
        
    } catch (error) {
        res.status(400).json({
           status: 'failed',
           msg: 'product not found'
       })
        
    }
}

exports.addProduct = async (req, res) => {
    // console.log(req.body)
    let { name, price, brand, image } = req.body
    let date = new Date()
    let product = new Product()
    product.name = name
    product.price = price
    product.brand = brand
    product.image = image
    product.created_At = date
    product.updated_At = date
    await product.save()

    res.json({ status: 'success' })
    // let {name}=req.body

    // let id= products[products.length-1].id + 1
    // products.push({id,name})
    // res.json({
    //     status:'success',
    //     data:{id,name}
    // })
}

exports.updateProduct = (req, res) => {
    // let { id } = req.params
    // let { name } = req.body
    // let product = products.find((v, i) => v.id == id)
    // if (product) {
    //     let index = products.indexOf(product)
    //     products.splice(index, 1, { id, name })
    //     res.status(200).json({
    //         status: 'success',
    //         msg: 'product updated'
    //     })
    // }
    // else res.status(400).json({
    //     status: 'failed',
    //     msg: 'product not found'
    // })
}

exports.deleteProduct = async (req, res) => {
    let { id } = req.params
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({
            status: 'success',
            msg: 'product deleted'
        })
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            msg: error.message
        })
    }


}


