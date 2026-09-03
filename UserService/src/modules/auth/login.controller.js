const loginService = require('./login.service');
const responceHelper = require('../../Utils/responceHelper');
const {StatusCodes} = require('http-status-codes');
const asyncHandler = require('../../Utils/asyncHandler')

const login = asyncHandler(async(req, res, next)=>{
    const result = await loginService.loginUser(req.body)
    return responceHelper(res, StatusCodes.OK, "The login successfully", result)
})

module.exports = {
    login
}

