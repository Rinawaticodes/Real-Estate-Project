const express = require("express");
const cookieParser = require("cookie-parser");
const postRouter = require("./routes/post.route.js");
const authRouter = require("./routes/auth.route.js");
const testRouter = require("./routes/test.route.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);


app.listen(8800, () => {
  console.log("Server is running!");
});
