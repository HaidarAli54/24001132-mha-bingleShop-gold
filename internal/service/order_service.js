
const { where } = require('sequelize')
const OrderRepository = require('../repository/order_repository')
const ProductRepository = require('../repository/product_repository')


const orderRepository = new OrderRepository()
const productRepository = new ProductRepository()

class OrderService {
    
    async createOrder(body) {


        const product = await productRepository.findById(body.id_product)
        
        const totalPrice = product.price * body.quantity

        const data = {
            id_user: body.id_user,
            id_product: body.id_product,
            quantity: body.quantity,
            order_date: new Date,
            total_price: totalPrice
        }
        await orderRepository.createOrder(data)
    }
}

module.exports = OrderService


