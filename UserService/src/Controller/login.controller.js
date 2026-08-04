const loginService = require('../Service/login.service');

const login = async(req, res)=>{

    try {
        const result = await loginService.loginUser(req.body);
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
    
}

module.exports = {
    login
}
