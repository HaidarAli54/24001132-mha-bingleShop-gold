
const ProductRepository = require('../repository/product_repository')
// const bcrypt = require ('bcrypt')
// const errorHelper = require ('../error_response/error_helper')

class ProductService { 

    async createProduct(body) {

        //seller masukan product
        const productRepository = new ProductRepository()

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

}

module.exports = ProductService