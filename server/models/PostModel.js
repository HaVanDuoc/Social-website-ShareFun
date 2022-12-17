const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Bài đăng phải có chủ đề'], trim: true },
    content: {
        type: String, required: [true, 'Bài đăng phải có nội dung'], trim: true,
    },
    tag: { type: Array, default: [] },
    favorite: { type: Array, default: [] },
    comment: { type: Array, default: [] },
    shared: { type: Array, default: [] },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

module.exports = mongoose.model("Post", PostSchema);