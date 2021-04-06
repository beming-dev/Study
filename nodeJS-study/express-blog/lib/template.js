module.exports = {
  HTML: function (list, content) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="/css/design.css" />
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
  },
  category: function (direc) {
    let list = "";
    for (let i = 0; i < direc.length; i++) {
      list += `<a href="/${direc[i]}" class="category">${direc[i]}</a>`;
    }
    return list;
  },
  makeContent: function (filelist, id) {
    let content = "";
    for (let i = 0; i < filelist.length; i++) {
      content += `
        <div class="content">
          <img src="/images/deffault.jpg" alt=""/>
          <span class="description"><a href="/${id}/${filelist[i]}">${filelist[i]}</a></span>
        </div>
      `;
    }
    return content;
  },
  mainContent: function (dirname, dir) {
    let content = "";
    for (let i = 0; i < dir.length; i++) {
      content += `
        <div class="content">
          <img src="/images/deffault.jpg" alt=""/>
          <span class="description"><a href="/${dirname}/${dir[i]}">${dir[i]}</a></span>
        </div>
      `;
    }
    return content;
  },
  makePostHTML: (title, post) => {
    return `
    <span class="post">
      <div class="postTitle">
        ${title}
      </div>
      <div class="description">
        ${post}
      </div>
    </span>
    `;
  },
};
