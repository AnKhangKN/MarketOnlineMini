const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const throwError = require("../utils/throwError");

// Hàm tách token từ header
const extractToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
    return authHeader.split(" ")[1].replace(/"/g, "");
};

// Middleware xác thực token
const verifyToken = (req, res, next) => {
    const token = extractToken(req);

    if (!token) throwError("Token không tồn tại!", 401);

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err) throwError("Token không hợp lệ!", 403);

        req.user = decoded; // Nếu bên generate token đã bọc payload thì decoded phải .payload (decoded.payload).
        next();
    });
};

const isAdmin = (req, res, next) => {
    if (req.user?.isAdmin) return next();
    throwError("Người dùng không phải Admin!", 403);
};

const isSeller = (req, res, next) => {
    if (req.user?.isSeller) return next();
    throwError("Người dùng không phải người bán hàng!", 403);
};

const isUser = (req, res, next) => {
    if (!req.user?.isAdmin && !req.user?.isSeller) return next();
    throwError("Không phải người dùng!", 403);
};

module.exports = {
    verifyToken,
    isAdmin,
    isSeller,
    isUser,
};
