const throwError = require("../../utils/throwError");

const registerUserValidator = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;

    if (!email) {
        throwError("Email không được trống!", 400);
    }

    if (!password) {
        throwError("Mật khẩu không được trống!", 400);
    }

    if (!confirmPassword) {
        throwError("Nhập lại mật khẩu không được trống!", 400);
    }

    if (password !== confirmPassword) {
        throwError("Mật khẩu và nhập lại mật khẩu không trùng khớp!", 400);
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        throwError("Email không hợp lệ!", 400);
    }

    next();
};

const registerShopValidator = (req, res, next) => {
    const avatarFile = req?.file;
    const { shopName, description, city, address, phone } = req.body;

    if (!avatarFile) {
        throwError("Hãy thêm 1 ảnh shop!", 400);
    }

    if (!shopName) {
        throwError("Tên shop không được trống!", 400);
    }

    if (!description) {
        throwError("Mô tả shop không được trống!", 400);
    }

    if (!city) {
        throwError("Thành phố không được trống!", 400);
    }

    if (!address) {
        throwError("Địa chỉ không được trống!", 400);
    }

    if (!phone) {
        throwError("Số điện thoại không được trống!", 400);
    }

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
        throwError("Số điện thoại không hợp lệ!", 400);
    }

    next();
};

module.exports = {
    registerUserValidator,
    registerShopValidator
};
