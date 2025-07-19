const Shop = require("../../models/Shop");
const User = require("../../models/User");
const throwError = require("../../utils/throwError");

class ShopServices {
    async createShop(ownerId, shopName, description, city, address, phone, shopAvatar) {
        // Kiểm tra người dùng tồn tại
        const user = await User.findById(ownerId);
        if (!user) throwError("Người dùng không tồn tại", 404);

        // Kiểm tra đã có shop chưa
        const existingShop = await Shop.findOne({ ownerId });
        if (existingShop) throwError("Người dùng đã có shop", 400);

        // Tạo mới shop
        const shop = await Shop.create({
            ownerId,
            shopName,
            description,
            city,
            address,
            phone,
            avatar: shopAvatar
        });

        // Cập nhật quyền user
        user.isSeller = true;
        await user.save();

        return {
            message: "Tạo shop thành công!",
            user,
            shop
        };
    }
}

module.exports = new ShopServices(); // export instance luôn để dùng trực tiếp
