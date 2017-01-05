
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test8</title>
  </head>
  <body>
    <?php
      class Person {
        public $firstName;
        public $lastName;

        public function __construct($firstName, $lastName) {
          $this->firstName = $firstName;
          $this->lastName = $lastName;
        }

        public function show() {
          print "<p>僕の名前は{$this->lastName}{$this->firstName}です。</p>";
        }


        public function __destructb() {
          print '<p>'.__class__.'オブジェクトが破棄されました。';
        }
      }


      // 静的メソッド
      class Area {
        // public static function circle($radius){
        //   return pow($radius, 2) * 3.14;
        // }

        //静的プロパティ
        // public static $pi = 3.14;
        //
        // public static function circle($radius2) {
        //   return pow ($radius2, 2) * self::$pi;
        // }


        //クラス定数
        const PI = 3.14;

        public static function circle($radius3) {
          return pow($radius3, 2) * self::PI;
        }
      }


      //練習
      class MyClass{
        public static function square($height, $width) {
          return $height * $width;
        }
      }


      // カプセル化
      // アクセサメソッド
      // class TriangleFigure {
      //   //base(底辺), height(高さ)プロパティを定義
      //   public $base;
      //   public $height;
      //
      //   //プロパティ値を初期化(コンストラクタ)
      //   public function __construct() {
      //     $this->base = 1;
      //     $this->height = 1;
      //   }
      //
      //   //プロパティ値を基に面積を取得
      //   public function getArea() {
      //     return $this->base * $this->height / 2;
      //   }
      // }


      //正しい表記
      class TriangleFigure {
        //プロパティはprivate権限で定義
        private $base;
        private $height;

        //プロパティ値を初期化(コンストラクタ)
        public function __construct() {
          $this->setBase(1);
          $this->setHeight(1);
        }
        //baseプロパティのゲッター(取得)メソッド
        public function getBase() {
          return $this->base;
        }
        //baseプロパティのセッター(設定)メソッド
        public function setBase($base) {
          if($base > 0) {
            $this->base = $base;
          }
        }
        //heightプロパティのゲッター(取得)メソッド
        public function getHeight() {
          return $this->height;
        }
        //heightプロパティのセッター(設定)メソッド
        public function setHeight($height) {
          if($height > 0) {
            $this->height = $height;
          }
        }
        //プロパティ値を基に面積を取得
        public function getArea() {
          return $this->getBase() * $this->getHeight()  / 2;
        }
      }


      //継承
      class BusinessPerson extends Person {
        //サブクラス独自のworkメソッドを定義
        public function work() {
          print "<p>{$this->lastName}{$this->firstName}は働いています。</p>";
        }
      }

      // オーバーライド
      class EliteBusinessPerson extends BusinessPerson {
        public function work() {
          print "<p>{$this->lastName}{$this->firstName}はバリバリ働いています。</p>";
        }
      }


      //ポリモーフィズム
      class Figure {
        //プロパティを定義(protected修飾子で制限)
        protected $width;
        protected $height;
        //コントラクタ(プロパティを初期化)
        public function __construct($width, $height) {
          $this->width = $width;
          $this->height = $height;
        }

        //面積を求める(中身はダミー)
        public function getArea() {
          return 0;
        }
      }



      // MachineTraitトレイトを定義
      trait MachineTrait {
        private $starting = 'Starting...Run!!';

        //機器を起動
        public function run() {
          print $this->starting;
        }
      }




































    ?>
  </body>
</html>
