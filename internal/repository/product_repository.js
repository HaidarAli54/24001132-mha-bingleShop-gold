
const Product = require ('../models/product_model')

class ProductRepository{

    async createProduct(data) {
        await Product.create({
            id_user: data.id_user,
            name: data.name,
            description: data.description,
            price: data.price,
            category: data.category,
            quantity: data.quantity
        })
    }

    async findProductAll() {

        const findProduct  = await Product.findAll() 
        
        if(!findProduct) {
            throw new errorHelper (404, "Product not found") 
        }

        return findProduct
    }
}


module.exports = ProductRepository