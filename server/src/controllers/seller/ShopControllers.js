const ShopServices = require("../../services/seller/ShopServices");

const createShop = async (req, res, next) => {
    try {
        const ownerId = req?.user?._id;
        const avatarFile = req?.file;
        const { shopName, description, city, address, phone } = req.body;

        const shopAvatar = avatarFile.filename;

        const result = await ShopServices.createShop(
            ownerId,
            shopName,
            description,
            city,
            address,
            phone,
            shopAvatar
        );
        return res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createShop,
};
