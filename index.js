const authRouter = require("./routes/auth.routes");
const postRouter = require('./routes/post.routes');
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/auth", authRouter);
app.use('/posts', postRouter)

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
