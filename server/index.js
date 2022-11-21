const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors")
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const PORT = process.env.PORT || 8080;

dotenv.config();

mongoose.connect(process.env.MONGODB_URL);

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors())

app.use("/server/users", userRoute);
app.use("/server/auth", authRoute);
app.use("/server/posts", postRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
