const joi = require('joi');

const registerValidationSchema = joi.object({
    name: joi.string()
        .min(3)
        .required(),

    email: joi.string()
        .email()
        .required(),

    password: joi.string()
        .min(8)
        .pattern(/[A-Za-z]/)
        .pattern(/[0-9]/)
        .pattern(/[^A-Za-z0-9]/)
        .required()
}).unknown(false);

module.exports = registerValidationSchema;