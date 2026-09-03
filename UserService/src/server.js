require('dotenv').config();
const app = require('./app')
const PORT = process.env.PORT || 5000;
const redisClient = require('./config/redis');

const startServer = async()=>{

    try {
        await redisClient.connect()
    
    console.log('redis connected successfully')
    app.listen(PORT, ()=>{
    console.log(`The server start listening at port ${PORT}`)
})
    } catch (error) {
        console.error(`message: Failed to connect ${error}`)
        process.exit(1)
    }
}

startServer()

