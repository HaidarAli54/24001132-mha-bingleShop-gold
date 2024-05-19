
const ProductService = require('../service/product_service')
const response = require('../error_response/response_helper')


const productService = new ProductService()


class productController {

    //controller createProduk
    async createProduct(req, res, next) {

        const body = req.body

        try { 
            await productService.createProduct(body)

            return new response(res, 201, 'create product succesfully')
    
        }

       catch(error) {
            next(error) 
        }  
    }

    //controller melihat semua Produk

    async readProduct(req, res, next) {

        try {

            const result = await productService.readProduct()


            return new response(res, 201, result)

        } catch (error) {
            next(error)
        }
    }
   
    
}

module.exports = productController