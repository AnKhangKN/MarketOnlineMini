const Shop = require("../../models/Shop");
const User = require("../../models/User");

const signUpShop = (ownerId, shopName, description, city, address, phone, shopAvatar) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findById(ownerId);
            if (!user) return reject(new Error("Người dùng không tồn tại"));

            const existingShop = await Shop.findOne({ ownerId });
            if (existingShop) return reject(new Error("Người dùng đã có shop"));

            const shop = await Shop.create({
                ownerId,
                shopName,
                description,
                city,
                address,
                phone,
                shopAvatar
            });

            // Cập nhật quyền user
            user.isSeller = true;
            await user.save();

            resolve({
                message: "Tạo shop thành công!",
                user,
                shop,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    signUpShop,
};