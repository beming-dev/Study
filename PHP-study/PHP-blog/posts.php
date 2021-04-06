<?php
require_once("./util.php");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="blog.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/1ca5c84213.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <header class="header">
      <div class="head"><a href="./blog.php">Beming</a></div>
      <div class="iconBox">
        <a href="https://github.com/search?q=beming-dev"><i class="fab fa-github-square"></i></a>
      </div>
    </header>

    <i class="category_i fas fa-hamburger"></i>

    <div class="top_category_back">
      <div class="top_category">
        <?php
        print_top_category();
        ?>
      </div>
    </div>

    <div class="content">
      <div class="left">
        <div class="category">
          <?php
          print_category();
          ?>
        </div>
      </div>
      <?php
      $list = scandir('./posts');
      ?>
      <div class="right">
        <div class="postBox">
          <div class="posts">
              <?php
              print_post();
              ?>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer"></footer>
  </body>

  <script src="blog.js"></script>
</html>
