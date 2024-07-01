let express= require('express')
let router=express.Router()
const {auth}=require('../utilities/auth.js')

const multer=require('multer')
// const imageFile=multer({dest:'public/'})
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null, 'public/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        let extName=file.mimetype.split("/")[1]
        // console.log(extName)
        cb(null, file.fieldname + '-' + uniqueSuffix+ '.' + extName)
      }
})
const imageFile=multer({storage:storage})

const {allProducts,singleProduct,addProduct,updateProduct,deleteProduct}=require('../controllers/productController.js')

router.get('/',allProducts)

router.get('/:id',singleProduct)

router.post('/',auth,addProduct)

router.put('/:id',auth,updateProduct)
// dynamic routing
router.delete('/:id',auth,deleteProduct)


router.post('/upload',imageFile.single('image'),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.send('image received')
  })
module.exports=router


