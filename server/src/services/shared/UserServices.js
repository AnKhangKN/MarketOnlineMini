const User = require('../../models/User');
const throwError = require("../../utils/throwError");

class UserServices {
    async getDetailUser(userId) {
        const user = await User.findById(userId).select("-password"); // ẩn mật khẩu

        if (!user) throwError("Người dùng không tồn tại", 401);

        return {
            message: "Lấy thông tin người dùng thành công!",
            data: user,
        };
    }
}

module.exports = new UserServices();
