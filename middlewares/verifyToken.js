const jwt = require('jsonwebtoken')
const JWT_SECRET = 'my_secret_key';

// admin login 

function authenticateToken(req, res, next) {
    const authHeader = req.headers('autherization');
    const token = authHeader && authHeader.split('')[1];
    if (!token) {
        return res.status(401).json({ re: 'access token required' });
    }
    jwt.verify(token, JWT_SECRET, (er, login) => {
        if (err) {
            console.log('token verify error occured', err);
            return res.status(403).json({ er: "invalid token or expired" });

        }
        req.login = login;
        next();
    })
}
module.exports= authenticateToken;