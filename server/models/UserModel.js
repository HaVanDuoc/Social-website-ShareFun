const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, trim: true, require: [true, 'Email must be require'] },
    password: { type: String, trim: true, require: [true, 'Password must be require'], minlength: [6, 'Password must be least 6 characters'] },
    name: { type: String, unique: true, trim: true, /* require: [true, 'Name must be require'] */ },
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
