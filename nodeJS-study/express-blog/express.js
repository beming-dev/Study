const express = require("express");
const app = express();

let fs = require("fs");

let port = 3000;
let basicRouter = require("./routes/index");

app.use((req, res, next) => {
  fs.readdir("./posts", (e, filelist) => {
    req.category = filelist;
    next();
  });
});

app.use(express.static("public"));
app.use("/", basicRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("Running server on port 3000");
});
