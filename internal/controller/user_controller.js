
const UserService = require ('../service/user_service')
const response = require ('../error_response/response_helper')


const userService = new UserService()

class userController {

    async registerUser(req, res, next) {

        const body = req.body

        try { 
            await userService.registerUser(body)
            return new response(res, 201, 'create user succesfully')
        }
       catch(error) {
            next(error)
        }  
    }
    async registerSeller(req, res, next) {
        const body = req.body;

        try { 
            await userService.registerSeller(body)

            return new response(res, 201, 'create seller succesfully')
    
        }
       catch(error) {
            next(error);
        }  
    }
    async loginUser(req, res, next) {
        
        const body = req.body
        
        try {
            const token = await userService.loginUser(body);

            return new response(res, 200, 'Login successful', token)

        } catch (error) {
            next(error);
            
        }
    }
}

module.exports = userController