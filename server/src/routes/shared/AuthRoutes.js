const express = require('express');
const AuthControllers = require("../../controllers/shared/AuthControllers");
const { handleRefreshToken } = require("../../utils/jwt")
const route = express.Router();

route.post('/register', AuthControllers.signUpUser);  // đăng ký

route.post('/login', AuthControllers.signInUser);     // đăng nhập

route.post('/refresh-token', handleRefreshToken);

module.exports = route;
