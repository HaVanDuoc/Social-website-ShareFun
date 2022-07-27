const { json } = require("express");
const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

// create
router.post("/", async (req, res) => {
    const post = new Post(req.body);
    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

// read
// update
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("The post has been updated");
        } else {
            res.status.apply(403).json("You can update only your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("The post has been deleted");
        } else {
            res.status(500).json("You can delete only your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
