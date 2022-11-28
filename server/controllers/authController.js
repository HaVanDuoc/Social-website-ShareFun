const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// REGISTER CONTROLLER
exports.register = async (req, res, next) => {
    try {
        if (!req.body.name) {
            req.body.name = req.body.email
        }
        const user = await User.create(req.body)
        const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)
        res.status(200).json({
            status: 'success',
            data: { token, userId: user._id },
            message: "Đăng ký thành công"
        })
    } catch (error) {
        next(error)
    }
}

// LOGIN CONTROLLER
exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        // Check Account/Email
        if (!user) {
            // Error: Email is not correct
            const err = new Error("Tài khoản/email chưa  được đăng ký")
            err.statusCode = 400
            return next(err)
        }

        // Check password
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)
            res.status(200).json({
                status: 'success',
                data: {
                    message: "Đăng nhập thành công",
                    token,
                    userId: user._id,
                }
            })
        } else {
            // Error: Password is not correct
            const err = new Error("Sai mật khẩuý")
            err.statusCode = 400
            return next(err)
        }
    } catch (error) {
        res.json(error)
    }
}

// GET CURRENT USER
exports.getCurrentUser = async (req, res, next) => {
    try {
        const data = { user: null }
        if (req.user) {
            const user = await User.findOne({ _id: req.user.userId })
            data.user = { userId: user.userId }
        }
        res.status(200).json({
            status: 'success',
            data: data
        })
    } catch (error) {
        res.json(error)
    }
}