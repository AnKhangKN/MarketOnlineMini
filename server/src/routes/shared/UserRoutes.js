const express = require('express');
const { verifyToken} = require("../../middlewares/authMiddleware");
const UserControllers = require('../../controllers/shared/UserControllers')

const route = express.Router();

route.get('/profile', verifyToken, UserControllers.getDetailUser);

module.exports = route;