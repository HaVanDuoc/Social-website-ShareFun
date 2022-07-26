const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const PORT = 1810;

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected to MongoDB!");
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => {
    console.log("Server is running!");
});
