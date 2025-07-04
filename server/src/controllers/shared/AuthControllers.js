const AuthServices = require("../../services/shared/AuthServices");
const jwtServices = require("../../utils/jwt")

const signUpUser = async (req, res) => {
    try {
        const {email, password, confirmPassword} = req.body;

        if (!email || !password || !confirmPassword) {
            return res.status(400).send({
                error: "Thiếu thông tin!",
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                error: "Mật khẩu không khớp!",
            });
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: "Email không hợp lệ!"
            });
        }

        const result = await AuthServices.signUpUser(email, password);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
        });
    }
};

const signInUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const result = await AuthServices.signInUser(email, password);

        const { refreshToken, ...newResult } = result;

        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 365 * 24 * 60 * 60 * 1000,
            path: "/"
        });

        return res.status(200).json(newResult);

    } catch (error) {
        return res.status(500).json({
            error: error.message || "Internal Server Error",
        })
    }
};

const handleRefreshToken = async (req, res) => {
    try {
        const token = req.cookies.refresh_token;

        if (!token) {
            return res.status(401).json({
                message: "Người dùng chưa đang nhập!"
            })
        }

        const result = await jwtServices.handleRefreshToken(token);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({
            error: error.message || "Internal Server Error",
        })
    }
}

module.exports = {
    signUpUser,
    signInUser,
    handleRefreshToken
};
