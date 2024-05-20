
const ProductController = require('../controller/Product_controller')
const TokenJwt = require('../middleware/authentication')
const router = require('express').Router()
const tokenJwt = new TokenJwt()
const productController = new ProductController()

//router product
router.post('/api/product', tokenJwt.verifyToken, tokenJwt.otorisasi, productController.createProduct)
// router read Product
router.get('/api/product',productController.findProductAll)
// router delete product
router.delete('/api/product/:id',productController.deleteProduct);

module.exports = router