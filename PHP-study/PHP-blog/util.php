<?php
function print_category(){
  $category_list = scandir('./category');
  for($i=0; $i<count($category_list); $i++){
    if($category_list[$i]!="."&&$category_list[$i]!="..")
    echo "
    <a href=\"./posts.php?id=$category_list[$i]\">$category_list[$i]</a>
    ";
  }
}

function print_post(){
  if(isset($_GET['id'])){
    $pos = $_GET['id'];
    $post_list = scandir("./posts/$pos");
    for($i=0; $i<count($post_list); $i++){
      if($post_list[$i]!="." && $post_list[$i]!=".."){
        echo "
        <div class=\"post\">
          <img src=\"./img/sample.jpg\" alt=\"이미지\">
          <a href=\"./post.php?id=$post_list[$i]&category=$pos\" class=\"title\">$post_list[$i]</a>
        </div>
        ";
      }
    }
  }
}

function print_top_category(){
  $category_list = scandir('./category');
  for($i=0; $i<count($category_list); $i++){
    if($category_list[$i]!="."&&$category_list[$i]!="..")
    echo "
    <div><a href=\"./posts.php?id=$category_list[$i]\">$category_list[$i]</a></div>
    ";
  }
}
?>