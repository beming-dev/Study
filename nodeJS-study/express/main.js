// let qs = require("qs");
let fs = require("fs");
let path = require("path");
let sanitizeHtml = require("sanitize-html");
const express = require("express");
const app = express();
let router = express.Router();
let template = require("./lib/template.js");
let compression = require("compression");
const bodyParser = require("body-parser");

//main.js 요청될 때마다  호출
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extends: false }));
app.use(compression());

//mySelf middleware
app.get("*", function (request, response, next) {
  fs.readdir("./data", function (error, filelist) {
    request.list = filelist;
    next();
  });
});

app.get("/", (request, response) => {
  let title = "Welcome";
  let description = "Hello, Node.js";
  let list = template.list(request.list);
  let html = template.HTML(
    title,
    list,
    `<h2>${title}</h2>${description}`,
    `<a href="/create">create</a>
    <img src="/images/sample.png" style="display:block;">`
  );
  response.send(html);
});

app.get("/page/:pageId", (request, response, next) => {
  fs.readdir("./data", function (error, filelist) {
    let filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
      if (err) {
        next(err);
      } else {
        let title = request.params.pageId;
        let sanitizedTitle = sanitizeHtml(title);
        let sanitizedDescription = sanitizeHtml(description, {
          allowedTags: ["h1"],
        });
        let list = template.list(filelist);
        let html = template.HTML(
          sanitizedTitle,
          list,
          `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
          ` <a href="/create">create</a>
            <a href="/update/${sanitizedTitle}">update</a>
            <form action="/delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
            </form>`
        );
        response.send(html);
      }
    });
  });
});

app.get("/create", (request, response) => {
  let title = "WEB - create";
  let list = template.list(request.list);
  let html = template.HTML(
    title,
    list,
    `
      <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
    `,
    ""
  );
  response.send(html);
});

app.post("/create_process", (request, response) => {
  let post = request.body;
  let title = post.title;
  let description = post.description;
  fs.writeFile(`data/${title}`, description, "utf8", function (err) {
    response.redirect(`/page/${title}`);
  });
});

app.get("/update/:pageId", (request, response) => {
  var filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
    var title = request.params.pageId;
    var list = template.list(request.list);
    var html = template.HTML(
      title,
      list,
      `
        <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `,
      `<a href="/create">create</a> <a href="/update/${title}">update</a>`
    );
    response.writeHead(200);
    response.end(html);
  });
});

app.post("/update_process", (request, response) => {
  var post = request.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  fs.rename(`data/${id}`, `data/${title}`, function (error) {
    fs.writeFile(`data/${title}`, description, "utf8", function (err) {
      response.redirect(`/page/${title}`);
    });
  });
});

app.post("/delete_process", (request, response) => {
  var post = request.body;
  var id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, function (error) {
    response.redirect("/");
  });
});

// app.use((req, res, next) => {
//   res.status(404).send("Sorry cant find that!");
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => console.log("listening on port 3000"));
