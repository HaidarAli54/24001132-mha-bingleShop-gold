
const OrderService = require('../service/order_service')
const response = require('../error_response/response_helper')

const orderService = new OrderService()

class orderController {

    async createOrder(req, res, next) {

        try {

            await orderService.createOrder(req.body);

            return new response(res, 201, 'create order successfully')

        } 
        
        catch (error) {
            next(error)
        }
    }
}


module.exports = orderController