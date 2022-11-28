const express = require("express");
const router = express.Router();
const { register, login, getCurrentUser } = require("../controllers/authController");
const { checkCurrentUser } = require('../middlewares/checkCurrentUser')

router.post("/register", register);
router.post("/login", login);
router.route('/').get(checkCurrentUser, getCurrentUser)

module.exports = router;
