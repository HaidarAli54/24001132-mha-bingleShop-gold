
const UserService = require ('../service/user_service')
const response = require ('../error_response/response_helper')

class userController {

    async registerUser (req, res, next) {
        const body = req.body
        const userService = new UserService()

        try { 
            await userService.registerUser(body)

            return new response (res, 201, 'create user succes')
    
        }

       catch(error) {
            next(error)
        }  
    }
}

module.exports = userController