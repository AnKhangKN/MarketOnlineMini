const express = require('express');
const route = express.Router();
const ShopControllers = require('../../controllers/seller/ShopControllers');
const {verifyToken} = require("../../middlewares/authMiddleware");
const upload = require("../../middlewares/uploadShopAvatar");

route.post('/shops', verifyToken, upload.single("avatarShop"), ShopControllers.signUpShop);

module.exports = route;