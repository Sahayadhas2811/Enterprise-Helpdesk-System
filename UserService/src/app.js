const express = require('express')
const userRouter = require('./modules/Register/register.router')
const connectDB = require('./Config/db')
const errorHandler = require('./middleware/errorHandler')
const app = express()

connectDB()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Welcome");
    console.log("Welcome to the first router")
});

app.use('/userService', userRouter)

app.use(errorHandler.errorHandler);
module.exports = app;