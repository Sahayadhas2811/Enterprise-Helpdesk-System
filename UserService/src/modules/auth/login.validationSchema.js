const joi = require('joi');
const { unknown } = require('../Register/register.validationSchema');

const loginValidation = joi.object({
    email : joi.string()
            .required()
            .email(),

    password: joi.string()
            .min(8)
            .pattern(/[A-Za-z]/)
            .pattern(/[0-9]/)
            .pattern(/[^A-Za-z0-9]/)
            .required()
}, {unknown:false});

module.exports = loginValidation