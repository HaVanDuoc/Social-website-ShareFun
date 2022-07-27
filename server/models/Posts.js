const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema(
    {
        userId: {
            type: String,
            require: true,
        },
        desc: {
            type: String,
        },
        img: {
            type: String,
            require: true,
        },
        likes: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
