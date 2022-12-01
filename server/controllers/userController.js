const User = require("../models/UserModel")

// Follow a user
exports.followAUser = async (req, res, next) => {
    try {

        if (req.body.currentUsername !== req.params.username) {

            currentUser = await User.findOne({ username: req.body.currentUsername });
            userIsFollowed = await User.findOne({ username: req.params.username });

            if (!currentUser.following.includes(req.params.username)) {
                await currentUser.updateOne({ $push: { following: req.params.username } })
                await userIsFollowed.updateOne({ $push: { follower: req.body.currentUsername } })
                res.json({
                    status: "success",
                    message: `Bạn đã thành công theo dõi người dùng ${req.body.currentUsername}`
                })
            } else {
                res.json({
                    status: "success",
                    message: `Bạn đã theo dõi người dùng ${req.body.currentUsername} này rồi`
                })
            }

        } else {
            res.json("Bạn không thể theo dõi chính mình");
        }
    } catch (error) {
        res.json(error)
    }
}