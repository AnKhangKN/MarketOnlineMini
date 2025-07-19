const User = require("../../models/User");
const { compareSync, hashSync } = require("bcryptjs");
const {
    generateAccessToken,
    generateRefreshToken,
} = require("../../utils/jwt");
const throwError = require("../../utils/throwError");

class AuthServices {
    async register(email, password) {
        const existingUser = await User.findOne({ email });
        if (existingUser) throwError("Email đã được sử dụng!", 400);

        const hashedPassword = hashSync(password, 10);
        const newUser = await User.create({ email, password: hashedPassword });

        return {
            message: "Tạo tài khoản thành công!",
            newUser,
        };
    }

    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) throwError("Email không tồn tại!", 404);

        const isMatch = compareSync(password, user.password);
        if (!isMatch) throwError("Mật khẩu không đúng!", 401);

        const payload = {
            id: user._id,
            isAdmin: user.isAdmin,
            isSeller: user.isSeller,
        };

        const accessToken = await generateAccessToken(payload);
        const refreshToken = await generateRefreshToken(payload);

        return {
            message: "Đăng nhập thành công!",
            accessToken,
            refreshToken,
        };
    }
}

module.exports = new AuthServices();
