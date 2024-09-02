const express = require("express");
const cookieParser = require("cookie-parser");
const postRouter = require("./routes/post.route.js");
const authRouter = require("./routes/auth.route.js");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("Server is running!");
});
