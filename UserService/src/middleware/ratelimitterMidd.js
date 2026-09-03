import redisClient  from "../config/redis";

const rateLimitter = (loginData)=>{

    return async(req, res, next)=>{
        
        const ip = req.ip;
        const key = `rate_limiter:${loginData.name}:${ip}`

        const counter = await redisClient.incr(key);

        if(counter === 1){
            await redisClient.expire(key, loginData.window)
        }

        if(counter >= loginData.limit){
            const error = new Error('Too many requests. Please try again later')
            error.status = 429;
            return next(error)
        }

        next()
    }
}