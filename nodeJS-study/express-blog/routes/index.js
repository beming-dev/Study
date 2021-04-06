const express = require("express");
const router = express.Router();
let fs = require("fs");
const { request } = require("http");

let template = require("../lib/template.js");

router.get("/", (req, res) => {
  let content = "";
  [...req.category].forEach((dirname) => {
    let dir = fs.readdirSync(`./posts/${dirname}`);
    content += template.mainContent(dirname, dir);
    console.log(dir);
  });

  let list = template.category(req.category);
  let html = template.HTML(list, content);

  res.send(html);
});

router.get("/:cateId", (req, res) => {
  let cate = req.params.cateId;
  fs.readdir(`./posts/${cate}`, "utf8", (err, filelist2) => {
    let list = template.category(req.category);
    let content = template.makeContent(filelist2, cate);
    let html = template.HTML(list, content);
    res.send(html);
  });
});

router.get("/:cateId/:postId", (req, res) => {
  let cateId = req.params.cateId;
  let postId = req.params.postId;
  fs.readFile(`./posts/${cateId}/${postId}`, (e, post) => {
    let list = template.category(req.category);
    let content = template.makePostHTML(postId, post);
    let html = template.HTML(list, content);
    res.send(html);
  });
});

module.exports = router;
