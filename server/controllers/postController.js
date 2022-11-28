const Post = require("../models/PostModel")

// GET ALL POSTS
exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({}).populate('author', 'name').select('content createAt')
        res.status(200).json({
            status: 'success',
            result: posts.length,
            data: { posts }
        })
    } catch (error) {
        res.json(error)
    }
}

// GET A POSTS
exports.getAPost = async (req, res, next) => {
    try {
        const posts = await Post.find({}).populate('author')
        res.status(200).json({
            status: 'success',
            result: posts.length,
            data: { posts }
        })
    } catch (error) {
        res.json(error)
    }
}

// CREATE A POST
exports.createAPost = async (req, res, next) => {
    try {
        const { userId } = req.user;

        const post = await Post.create({ ...req.body, author: userId })
        res.status(200).json({
            status: 'success',
            data: { post }
        })
    } catch (error) {
        next(error)
    }
}

// UPDATE A POST
exports.updateAPost = async (req, res, next) => {
    try {
        const { postId } = req.params;

        const post = await Post.findByIdAndUpdate(postId, { ...req.body }, { new: true, runValidators: true })

        res.status(200).json({
            status: 'success',
            data: { post }
        })
    } catch (error) {
        next(error)
        // res.json(error)
    }
}

// DELETE A POST
exports.deleteAPost = async (req, res, next) => {
    try {
        const { postId } = req.params;

        await Post.findByIdAndDelete(postId)

        res.status(200).json({
            status: 'success',
            message: 'Post has been deleted'
        })
    } catch (error) {
        next(error)
    }
}