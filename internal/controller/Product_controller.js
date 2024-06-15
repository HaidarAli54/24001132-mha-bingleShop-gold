
const ProductService = require('../service/product_service')
const response = require('../error_response/response_helper')


const productService = new ProductService()


class productController {

    //controller createProduct
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

    //controller melihat semua Product

    async findProductAll(req, res, next) {

        try {

            const result = await productService.findProductAll()

            return new response(res, 201, result)

        } catch (error) {
            next(error)
        }
    }

    //controller lihat produk by id
    async findById(req, res, next) {

        try {

            const result = await productService.findById(req.params.id)

            return new response(res, 201, result)

        } catch(error) {
            next(error)
        }
    }

    // controller deleteProduct
    async deleteProduct(req, res, next) {

        try {

            await productService.deleteProduct(req.params.id);
            
            return new response(res, 200, 'Delete product successfully');
            
        } catch(error) {
            next(error);
        }
    }
    
}

module.exports = productController