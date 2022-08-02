const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            min: 3,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            min: 6,
        },
        firstname: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastname: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        signature: {
            type: String,
            max: 50,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
        followers: {
            type: Array,
            default: [],
        },
        followings: {
            type: Array,
            default: [],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        city: {
            type: String,
            max: 50,
        },
        from: {
            type: String,
            max: 50,
        },
        relationship: {
            type: Number,
            enum: [1, 2, 3],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
