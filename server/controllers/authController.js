const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// REGISTER CONTROLLER
exports.register = async (req, res, next) => {

    try {
        const { username, password, confirmPassword, policy } = req.body

        // Check username is not empty
        if (username === "" || password === "" || confirmPassword === "") {
            const err = new Error("Vui lòng nhập đầy đủ thông tin")
            err.statusCode = 400
            return next(err)
        }

        // Check password duplication
        if (password !== confirmPassword) {
            const err = new Error("Mật khẩu không trùng nhau")
            err.statusCode = 400
            return next(err)
        }

        // Check policy
        if (policy === false) {
            const err = new Error("Bạn có đồng ý với chính sách của chúng tôi")
            err.statusCode = 400
            return next(err)
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
        const user = await User.findOne({ username: req.body.username })

        // Error: Email is not correct
        if (!user) {
            const err = new Error('Tài khoản/email chưa  được đăng ký')
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
            const err = new Error("Sai mật khẩu")
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
            data.user = user
        }
        res.status(200).json({
            status: 'success',
            data: data
        })
    } catch (error) {
        res.json(error)
    }
}