const userRepo = require('./register.Repo')
const bcrypt = require('bcrypt')
const saltCount = 10;

const register = async(userData)=>{

    const existingUser = await userRepo.findByUserId(userData.userId);
    const existingEmail = await userRepo.findByEmail(userData.email);

    if(existingUser ){
        throw new Error('User Already Exists')
    }

    if(existingEmail){
        throw new Error('Email Exist already')
    }

    const hashPassword = await bcrypt.hash(userData.password, saltCount);

    const newUser = await userRepo.createUser({
        userId : userData.userId,
        name : userData.name,
        email: userData.email,
        password : hashPassword
    })

    return {
        message: 'User Created Successfully',
        user : newUser
    };
};

module.exports = {
    register
}