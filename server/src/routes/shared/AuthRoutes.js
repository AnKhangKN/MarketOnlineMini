const express = require('express');
const AuthControllers = require("../../controllers/shared/AuthControllers");
const route = express.Router();
const {loginUserValidator} = require("../../middlewares/validators/loginValidator");
const {registerUserValidator} = require("../../middlewares/validators/registerValidator");

route.post('/register', registerUserValidator, AuthControllers.registerUser);  // đăng ký

route.post('/login', loginUserValidator , AuthControllers.loginUser);     // đăng nhập

route.post('/token/refresh', AuthControllers.handleRefreshToken);  // refresh token

route.delete('/logout', AuthControllers.logoutUser); // đăng xuất

module.exports = route;
