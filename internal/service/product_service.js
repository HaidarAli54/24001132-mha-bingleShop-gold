
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
    async findProductAll() {

        return await productRepository.findProductAll() 
    }
    
    //melihat produk by id
    async findById(id_product) {
        
        return await productRepository.findById(id_product)
    }

    // hapus product by id
    async deleteProduct(id_product) {
        await productRepository.deleteProduct(id_product);
    }

}

module.exports = ProductService