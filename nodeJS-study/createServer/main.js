let http = require("http");
let fs = require("fs");
let url = require("url");
let qs = require("querystring");
let path = require("path");
let template = require("./lib/template.js");
let sanitizeHtml = require("sanitize-html");

// request 브라우저로 들어온 요청
// response 응답할 때 전송할 정보
let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(request.url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", (error, filelist) => {
        let title = "Welcome";
        let description = "Hello, Node.js";
        let list = template.list(filelist);
        let html = template.html(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    } else {
      fs.readdir("./data", (error, filelist) => {
        let filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, "utf8", (err, description) => {
          let title = queryData.id;
          let sanitizedTitle = sanitizeHtml(title);
          let sanitizedDescription = sanitizeHtml(description);
          let list = template.list(filelist);
          let html = template.html(
            sanitizedTitle,
            list,
            `<h2>${sanitizedTitle}</h2><p>${sanitizedDescription}</p>`,
            `<a href="/create">create</a>
            <a href="/update?id=${sanitizedTitle}">update</a>
            <form action="/process_delete" method="post" onsubmit="">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
            </form>`
          );
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", (error, filelist) => {
      let title = "WEB-create";
      let list = template.list(filelist);
      let html = template.html(
        title,
        list,
        `
        <form action="http://localhost:3000/process_create" method="post">
          <p>
            <input name="title" type="text" placeholder="title"/>
          </p>
          <p>
            <textarea name="description" placeholder="description" cols="30" rows="10"></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
        `,
        ""
      );
      response.writeHead(200);
      response.end(html);
    });
  } else if (pathname === "/process_create") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      let post = qs.parse(body);
      let title = post.title;
      let description = post.description;
      fs.writeFile(`data/${title}`, description, "utf8", (err) => {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end("success");
      });
    });
  } else if (pathname === "/update") {
    fs.readdir("./data", (error, filelist) => {
      fs.readFile(`data/${queryData.id}`, "utf8", (err, description) => {
        let title = queryData.id;
        let list = template.list(filelist);
        let html = template.html(
          title,
          list,
          `
          <form action="http://localhost:3000/process_update" method="post">
            <input type="hidden" name="old_title" value=${title}>
            <p>
              <input name="new_title" type="text" placeholder="title" value = ${title}>
            </p>
            <p>
              <textarea name="description" placeholder="description" cols="30" rows="10">${description}</textarea>
            </p>
            <p>
              <input type="submit" />
            </p>
          </form>
          `,
          `<a href="/create">create</a>
          <a href="/update?id=${title}">update</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if (pathname === "/process_update") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      let post = qs.parse(body);
      let old_title = post.old_title;
      let new_title = post.new_title;
      let description = post.description;
      fs.rename(`data/${old_title}`, `data/${new_title}`, function (err) {
        fs.writeFile(`data/${new_title}`, description, "utf8", (err) => {
          response.writeHead(302, { Location: `/?id=${new_title}` });
          response.end("success");
        });
      });
    });
  } else if (pathname === "/process_delete") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      let post = qs.parse(body);
      let id = post.id;
      console.log(id);
      fs.unlink(`data/${id}`, (error) => {
        response.writeHead(302, { Location: "/" });
        response.end("success");
      });
    });
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);
// nodejs parse querystring
