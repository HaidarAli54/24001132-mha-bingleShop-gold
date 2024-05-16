
const UserRepository = require('../repository/user_repository')
const bcrypt = require ('bcrypt')
const errorHelper = require ('../error_response/error_helper')

class UserService{ 

    async registerUser (body){

        const userRepository = new UserRepository
        // buat data yg di kirim ke database
        const data = {
            full_name: body.full_name,
            email: body.email,
            password: bcrypt.hashSync(body.password, 8),
            role: 'user'
        }
        //insert ke database
        await userRepository.createUser(data)

        // cek user apakah ada user email yang sama
        const user = await userRepository.getUserByEmail(body.email)
        if(user){
            throw new errorHelper(400, 'email sudah terdaftar')
        }   
    }
}


module.exports = UserService