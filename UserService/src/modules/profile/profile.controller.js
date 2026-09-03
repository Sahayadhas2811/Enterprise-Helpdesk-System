const profileService = require('./profile.service');
const responceHelper = require('../../Utils/responceHelper');
const {StatusCodes} = require('http-status-codes');
const asyncHandler = require("../../Utils/asyncHandler")

const profile = asyncHandler(async(req, res, next)=>{
    const result = await profileService.profile(req.body)
    return responceHelper(res, StatusCodes.OK, "Profile authenticated successfully", result)
})

module.exports = {
    profile
}

