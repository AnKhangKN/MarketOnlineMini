const express = require('express');
const { isUserMiddleware } = require("../../middlewares/auth.middleware");
const UserControllers = require('../../controllers/shared/UserControllers')

const route = express.Router();

route.get('/profile', isUserMiddleware, UserControllers.getDetailUser);

module.exports = route;