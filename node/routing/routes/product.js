let express= require('express')
let router=express.Router()

const {allProducts,singleProduct,addProduct,updateProduct,deleteProduct}=require('../controllers/productController.js')

router.get('/',allProducts)

router.get('/:id',singleProduct)

router.post('/',addProduct)

router.put('/:id',updateProduct)
// dynamic routing
router.delete('/:id',deleteProduct)

module.exports=router


