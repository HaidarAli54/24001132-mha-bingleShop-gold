
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

    async findById(id_product) {
        const findById = await Product.findOne({
            where: {id:id_product}
        })
        if(!findById) {
            throw new errorHelper(404, "product not found") 
        }

        return findById
    }
    
    async deleteProduct(id_product) {
        const product = await Product.findOne({
            where: { id: id_product }
        });

        if (!product) {
            throw new errorHelper(404, "Product not found");
        }

        await product.destroy();
    }


}


module.exports = ProductRepository