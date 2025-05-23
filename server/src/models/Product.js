const mongoose = require("mongoose");

const attributeSchema = new mongoose.Schema({
    name: String,
    value: String,
}, { _id: false });

// Định nghĩa 1 tổ hợp giá: gồm nhiều thuộc tính + giá + số lượng tồn
const priceOptionSchema = new mongoose.Schema({
    attributes: [attributeSchema],
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
}, { _id: false });

// Schema chính của sản phẩm
const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },

    images: [
        {type: String, required: false}
    ],

    category: { type: String, required: true },

    description: { type: String, required: false },

    shopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },

    priceOptions: [priceOptionSchema],

    sold: { type: Number, default: 0 },

    status: {
        type: String,
        enum: ["active", "inactive", "banned"],
        default: "active",
    },

    banned_until: { type: Date },

    adminWarnings: [{
        message: { type: String },
        adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now }
    }],

    rating: { type: Number, default: 0, min: 0, max: 5 },

    followers: { type: Number, default: 0 },

    reports: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            reason: { type: String }, // Lý do
            createdAt: { type: Date, default: Date.now },
            status: {
                type: String,
                enum: ["pending", "resolved", "dismissed"],
                default: "pending",
            },
        },
    ],

}, {
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
