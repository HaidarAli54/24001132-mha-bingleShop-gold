const OrderController = require('../controller/Order_controller')
const router = require('express').Router()
const TokenJwt = require('../middleware/authentication')
const orderController = new OrderController()

const tokenJwt = new TokenJwt()

//router create product
router.post('/api/order', tokenJwt.verifyToken, orderController.createOrder)


module.exports = router