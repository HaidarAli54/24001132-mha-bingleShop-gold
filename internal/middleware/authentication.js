
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_KEY;

class TokenJwt{

    verifyToken (req, res, next) {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(403).json({
                message: 'Token no provided!'
            });
        }

        jwt.verify(token, secret, (err, decoded) => {
            
            if (err) {
                return res.status(401).json({
                    message: 'Unauthorized!'
                });
            }
            req.Id_user = decoded.id;
            req.role = decoded.role;
            next()
        })
    }

    otorisasi (req, res, next) {
        if(req.role === 'user' || req.role === 'seller') {
            next();

        }else{
            res.status(500).json({
                message: 'you are not allowed'
            })
        }
    }
    
}

module.exports = TokenJwt