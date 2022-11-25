exports.register = async (req, res) => {
    const { email, password } = req.body
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    User.findOne({ email: email }, async (err, user) => {
        if (user) {
            res.send({ message: "Tên người dùng đã tồn tại!" })
        } else {
            const user = await new User({
                email,
                password: hashedPassword
            })
            const token = jwt.sign(JSON.stringify(user._id), process.env.APP_SECRET)
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.status(200).json({ status: 'success', data: { token, email: user.email }, message: "Đăng ký thành công!" })
                }
            })
        }
    })
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        User.findOne({ email: email }, async (err, user) => {

            // check email
            if (user) {
                // check password
                const match = await bcrypt.compare(
                    password,
                    user.password
                );
                const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)

                if (match) {
                    // login successful
                    res.status(200).json({
                        status: 'success',
                        data: {
                            token,
                            email: user.email
                        },
                        message: "Đăng nhập thành công"
                    });
                } else {
                    res.json({ status: 'failed', message: "Sai mật khẩu" });
                }
            } else {
                res.json({ status: 'failed', message: "Tài khoản chưa được đăng ký" });
            }
        })
    } catch (error) {
        res.json(error)
    }
}