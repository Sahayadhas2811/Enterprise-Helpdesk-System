const user = require("../Model/UserSchema");

const findByUserId = async(userId)=>{

    return await user.findOne({
        userId
    })
}

const findByEmail = async(email)=>{
    
    return await user.findOne({
        email
    })
}

const createUser = async(userData)=>{
    
    return await user.create({
  userId: userData.userId,
  name: userData.name,
  email: userData.email,
  password: userData.password
})

}

module.exports = {
    findByUserId,
    createUser,
    findByEmail
}