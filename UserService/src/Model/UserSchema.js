const mongoose = require('mongoose');

const userRegSchema = new mongoose.Schema({
    userId:{
        type: Number,
        require:true,
        unique:true
    },
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true,
        unique:true
    },
    password:{
        type: String,
        require:true,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User', userRegSchema)