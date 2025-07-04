const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const extractToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
    return authHeader.split(" ")[1].replace(/"/g, "");
};

// Admin Middleware
const isAdminMiddleware = (req, res, next) => {
    const token = extractToken(req);
    if (!token) {
        return res.status(401).json({ message: "No token provided", status: "ERROR" });
    }

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err || !decoded?.payload?.isAdmin) {
            return res.status(403).json({
                message: "Người dùng không phải admin",
                status: "ERROR",
            });
        }
        req.user = decoded.payload; // lưu user đã giải mã
        next();
    });
};

// Seller Middleware
const isSellerMiddleware = (req, res, next) => {
    const token = extractToken(req);
    if (!token) {
        return res.status(401).json({ message: "No token provided", status: "ERROR" });
    }

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err || !decoded?.payload?.isSeller) {
            return res.status(403).json({
                message: "Người dùng không phải vendor",
                status: "ERROR",
            });
        }
        req.user = decoded.payload;
        next();
    });
};

// User Middleware
const isUserMiddleware = (req, res, next) => {
    const token = extractToken(req);

    if (!token) {
        return res.status(401).json({ message: "Token bị thiếu", status: "ERROR" });
    }

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Token không hợp lệ", status: "ERROR" });
        }

        req.user = decoded;
        next();
    });
};


module.exports = {
    isAdminMiddleware,
    isSellerMiddleware,
    isUserMiddleware,
};
