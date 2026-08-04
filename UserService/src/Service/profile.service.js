const userRepo = require('../Repository/user.Repo');

const profile = async(data)=>{

    console.log('profile wo wooo')
    return {
        message: 'wo hoooo',
        name : data
    }
}

module.exports = {
    profile
}

