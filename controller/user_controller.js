

class userController {

    async registerUser (req, res, next) {

        try {
            //register user baru 
            const createUsers = await User.create({
                fullname: req.body.fullname,
                address: req.body.address,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
                role: 'user'
            })
                //memberikan respon bila gagal membuat user baru
                if(!createUsers){
                    throw new errorHelper(400, 'cannot create user')
                }
                return new response(res, 201, 'create user successfully')
        }
       catch(error) {
            next(error)
        }  
    }

    async registerSeller (req, res, next) {

        try {
            //membuat register seller baru 
            const createUsers = await User.create({
                fullname: req.body.fullname,
                address: req.body.address,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
                role: 'seller'
            })
                //memberikan respon bila gagal membuat seller baru
                if(!createUsers){
                    throw new errorHelper(400, 'cannot create user')
                }
                return new response(res, 201, 'create user successfully')
        }
       catch(error) {
            next(error)
        }  
    }


}

module.exports = {
    userController
}