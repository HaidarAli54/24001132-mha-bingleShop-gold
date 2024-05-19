
const OrderController = require('../controller/Order_controller')
const router = require('express').Router()

const orderController = new OrderController()

//router create product
router.post('/api/order',orderController.createOrder)


module.exports = router