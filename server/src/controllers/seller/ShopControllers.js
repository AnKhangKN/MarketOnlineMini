const ShopServices = require("../../services/seller/ShopServices");

const signUpShop = async (req, res) => {
    try {
        const ownerId = req?.user?._id;
        const avatarFile = req?.file;
        const { shopName, description, city, address, phone } = req.body;

        if (!avatarFile) {
            return res.status(400).json({ message: "Thiếu ảnh đại diện shop!" });
        }

        const shopAvatar = avatarFile.filename;

        const result = await ShopServices.signUpShop(
            ownerId,
            shopName,
            description,
            city,
            address,
            phone,
            shopAvatar
        );

        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = {
    signUpShop,
};
