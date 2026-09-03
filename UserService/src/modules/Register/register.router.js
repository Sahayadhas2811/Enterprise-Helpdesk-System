const userController = require('./register.controller');
const loginController = require('../auth/login.controller');
const profileController = require('../profile/profile.controller');
const verifyJwt = require('../../config/jwt')
const express = require('express');
const router = express.Router();
const validation = require('../../middleware/validationMiddlewere');
const registerValidationSchema = require('../Register/register.validationSchema');
const loginValidation = require('../../middleware/validationMiddlewere')


router.post('/register', validation(registerValidationSchema), userController.register);
router.post('/login', validation(loginValidation), loginController.login );
router.post('/profile', verifyJwt.verifyJwt, profileController.profile);
router.get('/redis-test', userController.redis2Test)

module.exports = router