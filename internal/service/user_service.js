
const UserRepository = require('../repository/user_repository')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const errorHelper = require('../error_response/error_helper')

const userRepository = new UserRepository()
const secret = process.env.JWT_KEY


class UserService { 

    async registerUser(body) {

        // cek user apakah ada user email yang sama
        const user = await userRepository.getUserByEmail(body.email)
        if(user){
            throw new errorHelper(400, 'email sudah terdaftar')
        }  

        // buat data yg di kirim ke database
        const data = {
            full_name: body.full_name,
            email: body.email,
            password: bcrypt.hashSync(body.password, 8),
            role: 'user'
        }

        //insert ke database
        await userRepository.createUser(data)

 
    }

    async registerSeller(body) {


        // cek user apakah ada user email yang sama
        const user = await userRepository.getUserByEmail(body.email)
        if(user){
            throw new errorHelper(400, 'email sudah terdaftar')
        }   

        // buat data seller yg di kirim ke database
        const data = {
            full_name: body.full_name,
            email: body.email,
            password: bcrypt.hashSync(body.password, 8),
            role: 'seller'
        }
        //insert ke database
        await userRepository.createUser(data)

    }

    async loginUser(body) {

        //cek apakah ada user yang sama
        const findUser = await userRepository.getUserByEmail(body.email)

        if(!findUser) {
            throw new errorHelper(404, 'email not found')
        }

        if (!body.password || !findUser.password) {
            throw new errorHelper(400, 'Password is required');
        }

        //variabel validasi pssword
        const passwordIsValid = bcrypt.compareSync(body.password, findUser.password);
        
        if(!passwordIsValid) {
            throw new errorHelper(400, 'Invalid password')
        }

        //membuat token dan mengirimkan kedalam respon
        const token = jwt.sign({ id: findUser.id, full_name: findUser.full_name, role: findUser.role }, secret, {expiresIn : 86400 })//24 jam
        
        return { auth: true, token }
    }
}


module.exports = UserService