
const jwt = require('jsonwebtoken')
const config = require('../middleware/auth')


class TokenJwt{

    verifyToken (req, res, next) {

        const autHeader = req.headers['authorization']

        if (!autHeader) {
            return res.status(403).json({
                message: 'no token provided!'
            });
        }

        const token = autHeader.split('')[1];

        jwt.verify(token, config.secret, (err, decoded) =>{
            if(err) {
                return res.status(401).json({
                    message: 'unauthentized!'
                })
            }
            req.userId = decoded.id
            req.userRole = decoded.role
            next()
        })
    }

    otorisasi (req, res, next) {
        if(req.userRole == 'user' || req.userRole == 'seller') {
            next();
            
        }else{
            res.status(500).json({
                message: 'you are not allowed'
            })
        }
    }
    
}

module.exports = TokenJwt