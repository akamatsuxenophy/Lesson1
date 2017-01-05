<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test8</title>
  </head>
  <body>
    <?php
      require_once 'Person1.php';

      class Triangle extends Figure {
        //三角形の面積を求めるためのgetAreaメソッドを定義
        public function getArea() {
          return $this->width * $this->height / 2;
        }
      }
    ?>
 </body>
</html>
