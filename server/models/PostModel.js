const mongoose = require("mongoose");


// const PostSchema = new Schema(
//     {
//         userId: {
//             type: String,
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
    content: { type: String, required: [true, 'Post must have content'], trim: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

module.exports = mongoose.model("Post", PostSchema);