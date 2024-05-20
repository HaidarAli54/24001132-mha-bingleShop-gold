
const router = require('express').Router()
const UserController = require('../controller/user_controller')
const TokenJwt = require('../middleware/authentication')

const userController = new UserController()
const tokenJwt = new TokenJwt()

//router register user
router.post('/api/register/user', userController.registerUser)
//router register seller
router.post('/api/register/seller', userController.registerSeller)
//router login
router.post('/api/login', userController.loginUser)

// Router yang memerlukan otentikasi token
router.get('/api/login-route', tokenJwt.verifyToken, (req, res) => {
    res.status(200).send('Token valid!');
});
  // router yang memerlukan otorisasi
router.get('/api/login-role', tokenJwt.verifyToken, tokenJwt.otorisasi, (req, res) => {
    res.status(200).send('Anda memiliki akses!');
});

module.exports = router