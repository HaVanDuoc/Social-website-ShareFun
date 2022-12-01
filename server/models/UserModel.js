const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, trim: true, require: [true, 'Tên đăng nhập/Email là bắt buộc'] },
    password: { type: String, trim: true, require: [true, 'Mật khẩu không được để trống'], minlength: [6, 'Mật khẩu phải có ít nhất 6 ký tự'] },
    policy: { type: Boolean, default: false },
    avatar: { type: String, trim: true, default: "" },
    background: { type: String, trim: true, default: "" },
    firstName: { type: String, trim: true, default: "" },
    lastName: { type: String, trim: true, default: "" },
    signature: { type: String, trim: true, default: "" },
    following: { type: Array, default: [] },
    follower: { type: Array, default: [] },

}, { timestamps: true })

UserSchema.pre('save', function (next) {
    let user = this
    bcrypt.hash(user.password, 10, function (error, hash) {
        if (error) {
            return next(error)
        } else {
            user.password = hash
            next()
        }
    })
})

module.exports = mongoose.model("User", UserSchema);
