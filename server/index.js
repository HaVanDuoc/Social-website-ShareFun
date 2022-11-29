const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors")
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");
const { errorHandler } = require('./middlewares/errorHandler')

const PORT = process.env.PORT || 8080;

dotenv.config();

mongoose.connect(process.env.MONGODB_URL);

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors())

// Route
app.use("/server/user", userRoute);
app.use("/server/auth", authRoute);
app.use("/server/post", postRoute);

// Unhandled Route
app.all('*', (req, res, next) => {
    const err = new Error('Not Found')
    err.statusCode = 404;
    next(err)
})
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
