
const Image = require ('../models/image_model')

class ImageRepository{
    async uploadImage(data) {
        await Image.create({
            id_product: data.id_product,
            url: data.url,
        }) 
    }

    // async deleteImage(id_image){
    //    const image = Image.findOne ({
    //     where: { id: id_image }
    //     });

    //     if (!image){
    //     throw new errorHelper(404, "image not found");

    //     }
    //     await image.destroy()  
    // }

} 
    
module.exports = ImageRepository
