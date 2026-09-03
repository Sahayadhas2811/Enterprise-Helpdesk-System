const jwt = require('jsonwebtoken');

const verifyJwt = async(req, res, next)=>{

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(404).json({error: 'access denied, token found missing'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodeUser) =>{
        if(err){
        return res.status(404).json({error: 'access denied, invalid token'})
    }
    
    req.user = decodeUser;
    next()
    })

    
}

module.exports = {
    verifyJwt
}