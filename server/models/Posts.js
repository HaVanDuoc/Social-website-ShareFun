const mongoose = require("mongoose");

const postSchema = new Schema(
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
