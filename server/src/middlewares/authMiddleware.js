const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Hàm tách token từ header
const extractToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
    return authHeader.split(" ")[1].replace(/"/g, "");
};

// Middleware xác thực token
const verifyToken = (req, res, next) => {
    const token = extractToken(req);

    if (!token) {
        return res.status(401).json({ message: "Token bị thiếu", status: "ERROR" });
    }

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Token không hợp lệ", status: "ERROR" });
        }

        req.user = decoded; // Nếu bên generate token đã bọc payload thì decoded phải .payload (decoded.payload).
        next();
    });
};

// Admin Middleware
const isAdmin = (req, res, next) => {
    if (req.user?.isAdmin === true) return next();
    return res.status(403).json({
        status: "ERROR",
        message: "Người dùng không phải là Admin!",
    });
};

// Seller Middleware
const isSeller = (req, res, next) => {
    if (req.user?.isSeller === true) return next();
    return res.status(403).json({
        status: "ERROR",
        message: "Người dùng không phải là chủ Shop!",
    });
};

// User thông thường (không phải Admin và không phải Seller)
const isUser = (req, res, next) => {
    if (!req.user?.isAdmin && !req.user?.isSeller) return next();
    return res.status(403).json({
        status: "ERROR",
        message: "Không phải người dùng thông thường!",
    });
};

module.exports = {
    verifyToken,
    isAdmin,
    isSeller,
    isUser,
};
