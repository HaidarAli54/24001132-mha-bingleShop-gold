
const router = require('express').Router()
const UserController = require('../controller/user_controller')
const TokenJwt = require('../middleware/authentication')

const userController = new UserController()
const tokenJwt = new TokenJwt()

//router register user
router.post('/api/register/user',userController.registerUser)
//router register seller
router.post('/api/register/seller',userController.registerSeller)
//router login
router.post('/api/login',userController.loginUser)
//
router.get('/api/protected', tokenJwt.verifyToken, userController.loginUser)



module.exports = router