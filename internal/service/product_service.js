
const ProductRepository = require('../repository/product_repository')

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
    //menghapus product
    async deleteProduct(body) {

        return await productRepository.deleteProduct(i);
    }
    
}

module.exports = ProductService