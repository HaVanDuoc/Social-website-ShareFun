const { json } = require("express");
const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");
const User = require("../models/Users");

// get timeline profile user post
router.get("/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
