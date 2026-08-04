const userRepo = require('../Repository/user.Repo');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

const loginUser = async(userData)=>{

    const data = await userRepo.findByEmail(userData.email);

    if(!data){
        throw new Error('User Email not found')
    }

    const hashedPassword = data.password;
    
    const pass = await bcrypt.compare(userData.password, hashedPassword)

    if (!pass) {
    throw new Error("Invalid email or password");
    }

    const payload = { //we need to write payload, because the data is complete data from the mongodb, but we need only the required details
        name:data.name,
        email:data.email,
        userId:data.userId
    }

    const token = jwt.sign(payload, secret, {expiresIn: process.env.JWT_EXPIRES_IN})

    return{
        message:'login successfully',
        token : token
    }

}

module.exports = {
    loginUser
}