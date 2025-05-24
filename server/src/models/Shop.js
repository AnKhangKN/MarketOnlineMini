const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    reason: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ["pending", "resolved", "dismissed"],
        default: "pending",
    },
});

const adminWarningSchema = new mongoose.Schema({
    message: { type: String },
    bannedUntil: { type: Date },
    countBanned: { type: Number, default: 0 },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
}, { _id: false });

const shopSchema = new mongoose.Schema({
    shopName: { type: String, default: "" },

    description: { type: String, default: "" },

    city: { type: String, default: "" },

    address: { type: String, default: "" },

    phone: { type: String, default: "" },

    state: { type: String, enum: ['active', 'pending', 'inactive'], default: 'pending' },

    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },

    followers: { type: Number, min: 0, default: 0 },

    // Tổng số sản phẩm đã bán thành công
    soldCount: { type: Number, default: 0 },

    adminWarnings: [adminWarningSchema],

    reports: [reportSchema],

}, {
    timestamps: true,
});

// Thêm index để tối ưu truy vấn
shopSchema.index({ state: 1 });

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
