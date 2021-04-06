let http = require("http");
let fs = require("fs");
let url = require("url");
// let qs = require("querystring");
let path = require("path");

function templateHTML(css, list, content) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      ${css}
    </style>
  </head>
  <body>
    <div class="left">
      <div class="category_box">
        ${list}
      </div>
    </div>
    <div class="middle">
      <div class="title"><a href = "/">Beming</a></div>
      <div class="content_box">
        ${content}
      </div>
    </div>
    <div class="right">what</div>
  </body>
  </html>
`;
}

function category(direc) {
  let list = "";
  for (let i = 0; i < direc.length; i++) {
    list += `<a href="/?id=${direc[i]}" class="category">${direc[i]}</a>`;
  }
  return list;
}

function makeContent(filelist, id) {
  let content = "";
  for (let i = 0; i < filelist.length; i++) {
    content += `
      <div class="content">
        <img src="./img/deffault.jpg" alt=""/>
        <span class="description"><a href="/post?pos=${id}&id=${filelist[i]}">${filelist[i]}</a></span>
      </div>
    `;
  }
  return content;
}

let css = "";
fs.readFile("design.css", (e, data) => {
  css = data;
});

let app = http.createServer((request, response) => {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./posts", (e, filelist) => {
        let list = category(filelist);
        let html = templateHTML(css, list, "");

        response.writeHead(200);
        response.end(html);
      });
    } else {
      let filteredId = path.parse(queryData.id).base;
      fs.readdir("./posts", (e, filelist) => {
        fs.readdir(`./posts/${filteredId}`, "utf8", (err, filelist2) => {
          let getImg = fs.readFileSync("./img/deffault.jpg").toString("base64");
          let list = category(filelist);
          // let img = fs.readFileSync("img/deffault.jpg", { encoding: "base64" });
          let img = getImg;
          let content = makeContent(filelist2, filteredId);
          let html = templateHTML(css, list, content);
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if (pathname === "/post") {
    let filteredId = path.parse(queryData.id).base;
    let filteredPos = path.parse(queryData.pos).base;
    let pos = filteredPos;
    console.log(pos);
    let id = filteredId;
    console.log(id);
    fs.readdir("./posts", (err, filelist) => {
      fs.readFile(`./posts/${pos}/${id}`, "utf8", (err, description) => {
        console.log(description);
        let list = category(filelist);
        let content = description;
        let html = templateHTML(css, list, content);
        response.writeHead(200);
        response.end(html);
      });
    });
  }
});

app.listen(3001);
