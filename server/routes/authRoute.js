const express = require("express");
const router = express.Router();
const { register, login, getCurrentUser } = require("../controllers/authController");
const { checkCurrentUser } = require('../middlewares/checkCurrentUser')

// POST - server/auth/register
router.post("/register", register);

// POST - server/auth/login
router.post("/login", login);

// POST - server/auth/
router.route('/').get(checkCurrentUser, getCurrentUser)

module.exports = router;
