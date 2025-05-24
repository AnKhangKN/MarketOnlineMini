const User = require("../../models/User");
const {compareSync, hashSync} = require("bcryptjs");
const {
    generateAccessToken,
    generateRefreshToken
} = require("../../utils/jwt");

const signUpUser = async (email, password) => {
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // Trả về lỗi dưới dạng đối tượng, controller sẽ xử lý
            throw new Error('Người dùng đã tồn tại!');
        }

        const hashedPassword = hashSync(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
        });

        return {
            status: 'OK',
            message: 'Tạo tài khoản thành công!',
            data: newUser,
        };
    } catch (error) {
        throw error;
    }
};

const signInUser = async (email, password) => {
    try {

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Người dùng không tồn tại!');
        }

        const isMatch = compareSync(password, user.password);
        if (!isMatch) {
            throw new Error('Mật khẩu không đúng!');
        }

        const payload = {
            id: user._id,
            isAdmin: user.isAdmin,
            isVendor: user.isVendor
        }

        const accessToken = await generateAccessToken(payload);

        const refreshToken = await generateRefreshToken(payload);

        return {
            message: "Đăng nhập thành công",
            data: {
                accessToken: accessToken,
                refreshToken: refreshToken
            },
        };

    } catch (error) {
        throw {
            message: error.message || "Internal Server Error",
        };
    }
};

module.exports = {
    signUpUser,
    signInUser
}