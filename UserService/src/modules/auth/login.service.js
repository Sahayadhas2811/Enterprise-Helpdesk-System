const userRepo = require('../Register/register.Repo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const redisClient = require('../../config/redis');
const responceHelper = require('../../Utils/responceHelper');
const { StatusCodes } = require('http-status-codes');

const secret = process.env.JWT_SECRET;

const loginUser = async (userData) => {

    const key = `login_attempt:${userData.email}`;
    const preCheckLogin = await redisClient.get(key);
    if(preCheckLogin >= 5){
        throw new Error('The accound already blocked due to multiple login attempt, please try again later')
    }

    const data = await userRepo.findByEmail(userData.email);
    if (!data) {
        throw new Error('Invalid email or password');
    }
    const hashedPassword = data.password;
    const pass = await bcrypt.compare(
        userData.password,
        hashedPassword
    );
    if (!pass) {

        const counter = await redisClient.incr(key);
        if (counter === 1) {
            await redisClient.expire(key, 900);
        }
        if (counter >= 5) {
            throw new Error(
                'Too many bad login attempts, please try again later!'
            );
        }
        throw new Error('Invalid email or password');
    }

    // Successful login → clear failed attempts
    await redisClient.del(key);

    const payload = {
        name: data.name,
        email: data.email,
        userId: data.userId
    };

    const token = jwt.sign(
        payload,
        secret,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    );

    return {
        message: 'Login successfully',
        token
    };

    
    
};

module.exports = {
    loginUser
};