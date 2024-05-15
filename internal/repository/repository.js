const User = require ('./model/login_model')

class LoginRepository{
    async GetDataByEmail(email) {
        await User.findOne({
            where: {
                email: email
            }
        })
    }
}

module.exports = LoginRepository