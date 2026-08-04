const express = require('express')
const userRouter = require('./Routers/user.router')
const connectDB = require('./Config/db')
const app = express()

connectDB()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Welcome");
    console.log("Welcome to the first router")
});

app.use('/userService', userRouter)

module.exports = app;