const mongoose = require("mongoose");
const { Schema } = mongoose;
// const bcrypt = require('bcrypt')

const UserSchema = new Schema(
    {
        email: {
            type: String,
            // require: true,
            min: 3,
            max: 50,
            unique: true,
        },
        username: {
            type: String,
            // require: true,
            min: 3,
            max: 20,
            unique: true,
        },
        password: {
            type: String,
            // require: true,
            min: 6,
        },
        firstname: {
            type: String,
            // require: true,
            min: 2,
            max: 50,
        },
        lastname: {
            type: String,
            // require: true,
            min: 2,
            max: 50,
        },
        signature: {
            type: String,
            max: 50,
        },
        avatar: {
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
        dayActive: {
            type: Number,
            default: 0,
        }
    },
    { timestamps: true }
);

// UserSchema.pre('save', function (next) {
//     let user = this
//     bcrypt.hash(user.password, 10, function (error, hash) {
//         if (error) {
//             return next(error)
//         } else {
//             user.password = hash
//             next()
//         }
//     })
// })

module.exports = mongoose.model("User", UserSchema);
