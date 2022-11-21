const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    User.findOne({ email: email }, async (err, user) => {
        if (user) {
            res.send({ message: "Tên người dùng đã tồn tại!" })
        } else {
            const user = await new User({
                username,
                email,
                password: hashedPassword
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Đăng ký thành công!" })
                }
            })
        }
    })
});

//LOGIN
router.post("/login", (req, res) => {
    const { email, password } = req.body

    User.findOne({ email: email }, async (err, user) => {

        // check email
        if (user) {
            // check password
            const match = await bcrypt.compare(
                password,
                user.password
            );

            if (match) {
                // login successful
                res.send({ message: "Đăng nhập thành công!", user: user });
            } else {
                res.send({ message: "Sai mật khẩu!" });
            }
        } else {
            res.send({ message: "Tài khoản không tồn tại!" });
        }
    })
});

module.exports = router;
