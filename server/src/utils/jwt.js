const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => {
    return jwt.sign(
        { payload },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '60s' }
    );
}

const generateRefreshToken = (payload) => {
    return jwt.sign(
        { payload },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '30d' }
    );
}

const handleRefreshToken = async (refreshToken) => {
    try {
        const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const access_token = generateAccessToken({
            id: user._id,
            isAdmin: user?.isAdmin,
            isVendor: user?.isVendor,
        });

        return {
            status: "OK",
            access_token,
        };

    } catch (error) {
        return {
            status: "ERROR",
            message: "Token không hợp lệ hoặc đã hết hạn",
        };
    }
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    handleRefreshToken
};
