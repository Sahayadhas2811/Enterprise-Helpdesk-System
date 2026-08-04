const userService = require('../Service/user.Service');

const register = async(req, res)=>{

    try {
        const result = await userService.register(req.body);

        return res.status(200).json(result);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
    }


};

module.exports = {
    register
}