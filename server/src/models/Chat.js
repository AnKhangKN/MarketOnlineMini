const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    lastMessage: {
        type: String,
        default: ""
    }
}, {
    timestamps: true,
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
