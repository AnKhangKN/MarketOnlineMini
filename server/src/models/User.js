const mongoose = require('mongoose');

// Địa chỉ giao hàng
const shippingAddressSchema = new mongoose.Schema({
    phone: { type: String, default: "" },
    city: { type: String, default: "" },
    address: { type: String, default: "" },
}, {
    _id: true,
});

// Sản phẩm yêu thích - cần giới hạn số sản phẩm yêu thích
const wishProductsSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    productName: { type: String, default: "" },
    images: { type: String, default: "" },
}, {
    _id: false,
});

// Shop yêu thích - cần giới hạn số shop yêu thích
const wishShopsSchema = new mongoose.Schema({
    shopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop' },
    shopName: { type: String, default: "" },
    images: { type: String, default: "" },
}, {
    _id: false,
});

// Người dùng
const userSchema = new mongoose.Schema({
    userName: { type: String, default: "" },
    fullName: { type: String, default: "" },
    avatar: { type: String, default: "" },

    email: { type: String, required: true, unique: true },
    isVerified: { type: Boolean, default: false },

    password: { type: String, required: true },

    shippingAddress: [shippingAddressSchema],

    wallet: { type: Number, default: 0 },

    isAdmin: { type: Boolean, default: false },
    isVendor: { type: Boolean, default: false },

    accessToken: { type: String, select: false },
    refreshToken: { type: String, select: false },

    // Danh sách yêu thích
    wishProducts: [wishProductsSchema],
    wishShops: [wishShopsSchema],

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
