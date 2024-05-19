
const ProductRepository = require('../repository/product_repository')
const errorHelper = require ('../error_response/error_helper')

const productRepository = new ProductRepository()

class ProductService { 

    //seller masukan product
    async createProduct(body) {

        const data = {
            id_user: body.id_user,
            name: body.name,
            description: body.description,
            price: body.price,
            category: body.category,
            quantity: body.quantity
        }
        await productRepository.createProduct(data)
    }

    //melihat semua product
    async readProduct() {

        return await productRepository.findProductAll() 
    }
}

module.exports = ProductService