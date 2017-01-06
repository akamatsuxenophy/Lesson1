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


      //インターフェイス
      class Triangle2 implements IFigure2 {
        //プロパティを定義
        private $width;
        private $height;
        //コンストラクタでプロパティを初期化
        public function __construct($width, $height) {
          $this->width = $width;
          $this->height = $height;
        }
        // IFigure2::getArea2メソッド実装
        public function getArea2() {
          return $this->width * $this->height / 2;
        }
      }
    ?>
 </body>
</html>
