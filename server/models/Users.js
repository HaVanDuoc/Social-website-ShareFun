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
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
        followers: {
            trype: Array,
            default: [],
        },
        followins: {
            trype: Array,
            default: [],
        },
        isAdmin: {
            trype: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
