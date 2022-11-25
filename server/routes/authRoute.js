const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { register, login } = require("../controllers/authController");

//REGISTER
router.post("/register", register);

//LOGIN
router.post("/login", login);

module.exports = router;
