const mongoose = require("mongoose");


// const PostSchema = new Schema(
//     {
//         userId: {
//             type: Array,
//             require: true,
//         },
//         title: {
//             type: String,
//         },
//         desc: {
//             type: String,
//         },
//         img: {
//             type: String,
//             require: true,
//         },
//         tag: {
//             type: Array,
//             default: [],
//         },
//         favourites: {
//             type: Array,
//             default: [],
//         },
//         comments: {
//             type: Array,
//             default: [],
//         },
//         shares: {
//             type: Array,
//             default: [],
//         },
//         views: {
//             type: Array,
//             default: [],
//         },
//     },
//     { timestamps: true }
// );

// module.exports = mongoose.model("Post", PostSchema);

const PostSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Bài đăng phải có chủ đề'], trim: true },
    content: {
        type: String, required: [true, 'Bài đăng phải có nội dung'], trim: true
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