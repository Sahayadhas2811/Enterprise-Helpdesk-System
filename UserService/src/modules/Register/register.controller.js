const userService = require('./register.Service');
const responceHelper = require('../../Utils/responceHelper');
const {StatusCodes} = require('http-status-codes');
const asyncHandler = require('../../Utils/asyncHandler')
const redisClient = require('../../config/redis')

const register = asyncHandler(async(req, res, next)=>{
    const result = await userService.register(req.body)
    return responceHelper(res, StatusCodes.OK, "Registered Sucessfully", result)
})

const redisTest = asyncHandler(async(req, res, next) =>{
    
    await redisClient.set('message', 'hello Redis');
    const result = await redisClient.get('message')

    return responceHelper(res, StatusCodes.OK, 'Redis test Success', result)
});

const redis2Test = asyncHandler(async(req, res, next)=>{

    const result = await redisClient.incr('loginAttempted:test');

    let timeOut = 900

    if(result === 1){
        await redisClient.expire('loginAttempted:test',timeOut )
    }

    if(result > 5){
        return responceHelper(res, StatusCodes.LOCKED, `Too many bad attempt, ${result}, try again again ${timeOut} secounds`, result)
    }
    return responceHelper(res, StatusCodes.OK, 'tested', result)
})

module.exports = {
    register,
    redisTest,
    redis2Test
}