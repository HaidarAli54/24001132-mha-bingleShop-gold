
const ProductService = require ('../service/product_service')
const response = require ('../error_response/response_helper')

class ProductController {

    async createProduct (req, res, next) {
        const body = req.body
        const productService = new ProductService()

        try { 
            await productService.createProduct(body)

            return new response (res, 201, 'create product succesfully')
    
        }

       catch(error) {
            next(error)
        }  
    }
}

module.exports = ProductController