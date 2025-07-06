const express = require('express');
const AuthControllers = require("../../controllers/shared/AuthControllers");
const route = express.Router();

route.post('/register', AuthControllers.signUpUser);  // đăng ký

route.post('/login', AuthControllers.signInUser);     // đăng nhập

route.post('/token/refresh', AuthControllers.handleRefreshToken);  // refresh token

route.delete('/logout', AuthControllers.logoutUser); // đăng xuất

module.exports = route;
