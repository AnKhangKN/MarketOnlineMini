const User = require('../../models/User');

const getDetailUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findById(userId).select("-password"); // ẩn mật khẩu

            if (!user) {
                return reject({
                    message: "Người dùng không tồn tại!",
                });
            }

            resolve({
                message: "Lấy thông tin người dùng thành công!",
                data: user,
            });
        } catch (error) {
            return reject({
                message: error.message || "Đã xảy ra lỗi khi lấy thông tin người dùng",
            });
        }
    });
};

module.exports = {
    getDetailUser,
};
