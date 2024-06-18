
const ProductController = require('../controller/Product_controller')
const TokenJwt = require('../middleware/authentication')
const router = require('express').Router()
const tokenJwt = new TokenJwt()
const productController = new ProductController()

//router product
router.post('/api/product', tokenJwt.verifyToken, tokenJwt.otorisasi, productController.createProduct)
// router get Product all
router.get('/api/product',productController.findProductAll)
//router get product by id
router.get('/api/product/:id',productController.findById)
//router update product
router.put('/api/product/:id',productController.updateProduct)
// router delete product
router.delete('/api/product/:id',productController.deleteProduct);

module.exports = router