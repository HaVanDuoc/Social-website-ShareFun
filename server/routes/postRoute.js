const { json } = require("express");
const express = require("express");
const router = express.Router();
const {verifyToken} = require('../middlewares/verifyToken')

const { getAllPosts, createAPost, updateAPost, deleteAPost } = require('../controllers/postController')

router.route('/').get(getAllPosts).post(verifyToken, createAPost)

router.route('/:postId').put(verifyToken, updateAPost).delete(verifyToken, deleteAPost)

module.exports = router

// // Get all posts
// router.get("/", async (req, res, next) => {
//     try {
//         const posts = await Post.find({}).populate('author')
//         res.status(200).json({
//             status: 'success',
//             result: posts.length,
//             data: { posts }
//         })
//     } catch (error) {
//         res.json(error)
//     }
// })

// // create a post
// router.post("/", async (req, res) => {
//     const post = new Post(req.body);
//     try {
//         const savedPost = await post.save();
//         res.status(200).json(savedPost);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // read
// router.get("/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         res.status(200).json(post);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // update
// router.put("/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (post.userId === req.body.userId) {
//             await post.updateOne({ $set: req.body });
//             res.status(200).json("The post has been updated");
//         } else {
//             res.status.apply(403).json("You can update only your post");
//         }
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // delete
// router.delete("/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (post.userId === req.body.userId) {
//             await post.deleteOne();
//             res.status(200).json("The post has been deleted");
//         } else {
//             res.status(500).json("You can delete only your post");
//         }
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // like/dislike a post
// router.put("/:id/like", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);

//         if (!post.favourites.includes(req.body.userId)) {
//             await post.updateOne({ $push: { favourites: req.body.userId } });
//             res.status(200).json("The post has been liked");
//         } else {
//             await post.updateOne({ $pull: { favourites: req.body.userId } });
//             res.status(200).json("The post has been disliked");
//         }
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // get timeline post random
// router.get("/timeline", async (req, res) => {
//     try {
//         const posts = await Post.find((post) => {
//             return post._id
//         })
//         res.status(200).json(posts)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// // get timeline post
// router.get("/timeline/:userId", async (req, res) => {
//     try {
//         const currentUser = await User.findById(req.params.userId);
//         const userPosts = await Post.find({ userId: currentUser._id });
//         const friendPosts = await Promise.all(
//             currentUser.followings.map(async (friendId) => {
//                 return await Post.find({ userId: friendId });
//             })
//         );
//         res.status(200).json(userPosts.concat(...friendPosts));
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // get timeline profile user post
// router.get("/profile/:username", async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.params.username });
//         const posts = await Post.find({ userId: user._id });
//         res.status(200).json(posts);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// module.exports = router;
