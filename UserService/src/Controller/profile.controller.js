const profileService = require('../Service/profile.service')

const profile = async(req, res) =>{

    try {
        const result = await profileService.profile(req.body)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({message:error.message})
    }

}

module.exports = {
    profile
}