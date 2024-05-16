const User = require ('../models/user_model')

class UserRepository{
    async getUserByEmail(email) {
        return await User.findOne({
            where: {
                email: email
            }
        })
    }
    async createUser(data) {
        await User.create({
            full_name: data.full_name,
            email: data.email,
            password: data.pasword,
            role: data.role
        })
    }
}


module.exports = UserRepository