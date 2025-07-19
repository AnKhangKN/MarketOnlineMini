const express = require('express');
const route = express.Router();
const ShopControllers = require('../../controllers/seller/ShopControllers');
const {verifyToken} = require("../../middlewares/authMiddleware");
const upload = require("../../middlewares/upload/uploadShopAvatar");
const {registerShopValidator} = require("../../middlewares/validators/registerValidator");

route.post('/shops', verifyToken, upload.single("avatarShop"), registerShopValidator, ShopControllers.createShop);

module.exports = route;