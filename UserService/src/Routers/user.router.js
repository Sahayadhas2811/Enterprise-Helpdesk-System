const userController = require('../Controller/user.controller');
const loginController = require('../Controller/login.controller');
const profileController = require('../Controller/profile.controller');
const verifyJwt = require('../Utils/jwt')
const express = require('express');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', loginController.login );
router.post('/profile', verifyJwt.verifyJwt, profileController.profile)

module.exports = router