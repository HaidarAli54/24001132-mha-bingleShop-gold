

const OrderRepository = require('../repository/order_repository')


const orderRepository = new OrderRepository


class OrderService {
    
    async createOrder() {

        const data = {
            id_user: Body.id_user,
            id_product: body.id_product,
            quantity: body.quantity,
            order_date: body.order_date,
            total_price: body.total_price
        }
        await orderRepository.createOrder(data)
    }
}

module.exports = OrderService


