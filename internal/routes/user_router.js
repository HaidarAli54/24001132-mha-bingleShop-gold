
const UserController = require ('../controller/user_controller')
const router = require ('express').Router()

const userController = new UserController()

//router user
router.post('/api/register/user',userController.registerUser)
//router seller
router.post('/api/register/seller',userController.registerSeller)

module.exports = router