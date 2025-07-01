const express = require('express');

const route = express.Router();

route.get('/profile', UserController);

module.exports = route;