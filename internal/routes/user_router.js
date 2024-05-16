
const UserController = require ('../controller/user_controller')
const router = require ('express').Router()

const userController = new UserController

//router user
router.post('/api/register/user',userController.registerUser)

module.exports = router