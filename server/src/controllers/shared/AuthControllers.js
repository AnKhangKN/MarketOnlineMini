const AuthServices = require("../../services/shared/AuthServices");
const jwtServices = require("../../utils/jwt");
const throwError = require("../../utils/throwError");

const registerUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const result = await AuthServices.register(email, password);
        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password, platform } = req.body;

        const result = await AuthServices.login(email, password);
        const { refreshToken, ...newResult } = result;

        if (platform === "web") {
            res.cookie("refresh_token", refreshToken, {
                httpOnly: true,
                secure: false, // Đổi thành true khi deploy với HTTPS
                sameSite: "strict",
                maxAge: 365 * 24 * 60 * 60 * 1000,
                path: "/"
            });

            return res.status(200).json(newResult); // Gửi access_token và user
        } else {
            return res.status(200).json({
                ...newResult,
                refreshToken // Cho mobile lưu
            });
        }
    } catch (error) {
        next(error);
    }
};

const handleRefreshToken = async (req, res, next) => {
    try {
        const token = req.cookies.refresh_token;

        if (!token) throwError ("Người dùng chưa đăng nhập!", 401);

        const result = await jwtServices.handleRefreshToken(token);
        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const logoutUser = async (req, res, next) => {
    try {
        res.clearCookie("refresh_token", {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            path: "/",
        });

        return res.status(200).json({
            status: "OK",
            message: "Đăng xuất thành công!",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    handleRefreshToken,
    logoutUser
};
