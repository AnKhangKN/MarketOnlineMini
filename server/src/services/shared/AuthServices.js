const User = require("../../models/User");
const {compareSync, hashSync} = require("bcryptjs");
const {
    generateAccessToken,
    generateRefreshToken
} = require("../../utils/jwt");

const signUpUser = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) return reject("Email đã được sử dụng!");

            const hashedPassword = hashSync(password, 10);
            const newUser = await User.create({ email, password: hashedPassword });

            resolve({
                message: "Tạo tài khoản thành công!",
                newUser,
            });
        } catch (error) {
            return reject({
                message: error.message,
            });
        }
    });
};

const signInUser = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return reject({
                    message: "Email không tồn tại!",
                });
            }

            const isMatch = compareSync(password, user.password);
            if (!isMatch) {
                return reject({
                    message: "Mật khẩu không đúng!",
                });
            }

            const payload = {
                _id: user._id,
                isAdmin: user.isAdmin,
                isSeller: user.isSeller,
            };

            const accessToken = await generateAccessToken(payload);
            const refreshToken = await generateRefreshToken(payload);

            return resolve({
                message: "Đăng nhập thành công!",
                accessToken,
                refreshToken,
            });

        } catch (error) {
            return reject({
                message: error.message || "Internal Server Error",
            });
        }
    });
};

module.exports = {
    signUpUser,
    signInUser
}