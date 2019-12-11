const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send({
        status : res.statusCode,
        message : 'Access Denied'
    });

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send({
            status : res.statusCode,
            message : 'Invalid Token'
        });
    }
}