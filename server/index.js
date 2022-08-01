const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const profileRoute = require("./routes/profile");

const PORT = 1810;

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected to MongoDB!");
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/server/users", userRoute);
app.use("/server/auth", authRoute);
app.use("/server/posts", postRoute);
app.use("/server/profile", profileRoute);

app.listen(PORT, () => {
    console.log("Server is running!");
});
