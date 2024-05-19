
const Order = require('../models/order_model') 


class OrderRepository{
    
    async createOrder(data) {
        await Order.create({
            id_user: data.id_user,
            id_product: data.id_product,
            quantity: data.quantity,
            order_date: data.order_date,
            total_price: data.total_price
        })
    }
}

module.exports = OrderRepository