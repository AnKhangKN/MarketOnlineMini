const throwError = require("../../utils/throwError");

const loginUserValidator = (req, res, next) => {
    const { email, password } = req.body;

    if (!email) {
        throwError("Hãy nhập email!", 400);
    }

    if (!password) {
        throwError("Hãy nhập mật khẩu!", 400);
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        throwError("Email không hợp lệ!", 400);
    }

    next();
};

module.exports = {
    loginUserValidator
};
