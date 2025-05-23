const mongoose = require("mongoose");

const attributeSchema = new mongoose.Schema({
    name: String,
    value: String,
}, { _id: false });

// Schema chi tiết từng sản phẩm trong đơn hàng
const productItemSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },

    product_name: { type: String, required: true },

    product_image: { type: String, required: true },

    attribute: [attributeSchema],

    price: { type: Number, required: true },

    quantity: { type: Number, required: true },

    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop",
        required: true,
    },

    // Trạng thái riêng của từng sản phẩm
    status: {
        type: String,
        enum: ["pending", "processing", "shipped", "delivered", "returned"],
        default: "pending",
        required: true,
    },

    isReviewed: {
        type: Boolean,
        default: false,
    },

    isDelivered: {
        type: Boolean,
        default: false,
    },

    deliveredAt: {
        type: Date,
    },

    // khi bị returned
    returnReason: { type: String },

    imgReturnReason: [{ type: String }],

    refundRequested: {
        type: Boolean,
        default: false
    },

    refundReason: {
        type: String,
        default: ""
    }
}, { _id: false });

// Schema chính của đơn hàng
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    items: [productItemSchema], // Danh sách sản phẩm

    shippingAddress: {
        city: { type: String, default: "" },
        address: { type: String, default: "" },
        phone: { type: String, default: "" },
    },

    paymentMethod: {
        type: String,
        enum: ["COD", "Online", "Wallet"],
        default: "COD",
    },

    totalPrice: {
        type: Number,
        required: true,
    },

    note: {
        type: String,
        default: "",
    },

    isPaid: {
        type: Boolean,
        default: false,
    },

    paidAt: {
        type: Date,
    },

    isCancelled: {
        type: Boolean,
        default: false,
    },

    cancelledAt: {
        type: Date,
    },

    cancelReason: {
        type: String,
        default: "",  // hoặc required: false
    },

    // Trạng thái đơn hàng tổng
    orderStatus: {
        type: String,
        enum: ["pending", "completed", "cancelled"],
        default: "pending",
    }
}, {
    timestamps: true,
});

// Tối ưu truy vấn theo người dùng, shop, trạng thái
orderSchema.index({ userId: 1 });
orderSchema.index({ "items.shopId": 1 });
orderSchema.index({ "items.status": 1 });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
