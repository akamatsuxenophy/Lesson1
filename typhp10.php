<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test10</title>
  </head>
  <body>
    <?php
      require_once 'Person1.php';

      // $p = new Person();
      //
      // $p->lastName = '山田';
      // $p->firstName = '太郎';
      // print "<p>僕の名前は{$p->lastName}{$p->firstName}です。</p>";
      //
      //
      // $p-> show();

      $p = new Person('太郎', '山田');
      $p-> show();


      // 静的メソッド
      print '円の面積:'.Area::circle(10).'cm^2';


      //静的プロパティ
      print '円周率:'.Area::PI.'<br/>';
      print '円の面積:'.Area::circle(10).'cm^2;'.'<br/>';


      //練習
      print '四角形の面積'.MyClass::square(10, 20).'cm^2'.'<br/>';


      //カプセル化
      // アクセサメソッド
      $tri = new TriangleFigure();
      $tri->getBase(-10);
      $tri->getHeight(-10);
      print "三角形の面積: {$tri->getArea()}".'<br/>';


      //継承
      $bp = new BusinessPerson('ケン太郎', '石橋');
      $bp->work();
      $bp->show();


      // オーバーライド
      $ebp = new EliteBusinessPerson('リオ', '加藤');
      $ebp->work();
      $ebp->show();


      //スーパークラスのメソッドを呼び出す
      $hbp = new HetareBusinessPerson('田中', '二郎');
      $hbp->work();

      //スーパークラスのコンストラクタをオーバーライド
      $f = new Foreigner('太郎', 'ヨーダ', '山田');
      $f->show();

      //練習問題
      $ex = new Exm('hello');
      $ex->showb();




      //ポリモーフィズ
      require_once 'Person2.php';
      require_once 'Person3.php';

      $tri2 = new Triangle(5, 10);
      $squ2 = new Square(5, 10);
      print "三角形の面積: {$tri2->getArea()}<br/>";
      print "四角形の面積: {$squ2->getArea()}<br/>";


      //インターフェイス
      $tri3 = new Triangle2(5, 15);
      print "三角形の面積: {$tri3->getArea2()}<br/>";


      // instanceof
      // IFigure2実装クラスの配列を用意
      $figs = [];
      $figs[] = new Triangle2(10, 5);
      $figs[] = new Square(10, 5);
      $figs[] = new Triangle2(2, 3);

      //配列$figsの内容を順番に処理
      foreach ($figs as $fig) {
        // IFigureインターフェイスを実装している場合飲み getAreaメソッドを実行
        if ($fig instanceof Ifigure2) {
          print '<p>'.get_class($fig).':'.$fig->getArea2().'</p>';
        }
      }



      // 無名クラス
      interface Runnable {
        function run();
      }

      class Myclassb {
        public function execute(Runnable $rc) {
          //ダミー処理後 (未来はなんらかの前処理を実行)
          print 'start...';
          //利用者側から指摘された処理を実行
          $rc->run();
          //ダミー処理 (本来はなんらかの後処理を実行)
          print 'end...';
        }
      }


      // $cls = new Myclassb();
      // //Runnable実装クラスを引数に渡す
      // $cls->execute(new class implements Runnable {
      //   public function run() {
      //     print 'process...';
      //   }
      // });


      // MachineTraitトレイトを定義
      class Fax {
        // MachineTraitトレイトをインポート
        use MachineTrait;

        //Faxを送信
        public function send() {
          print 'sending Fax...sended!!';
        }
      }

      $fx = new Fax();
      $fx->run();
      $fx->send();



      //トレイトと多重継承
      //型を定義
      interface IFax {
        function send();
      }

      interface IPrinter {
        function printed();
      }

      //実装を定義
      trait FaxTrait {
        public function send() {
          print 'sending Fax...sended!!';
        }
      }

      trait PrinterTrait {
        public function printed() {
          print 'printing...completed!!';
        }
      }

      //複合機クラスの定義
      class FaxPrinter implements IFax, IPrinter {
        use FaxTrait, PrinterTrait;
      }

      $fp = new FaxPrinter();
      $fp->send();
      $fp->printed();
      echo "<br/>";



      //アクセサメソッドの実装
      trait AccessorTrait {
        //未定義のプロパティを設定すると、配列propsに値を設定
        public function __set($name, $value) {
          //キーの有る無しをチェックし、存在しないキーはエラー
          if ($this->props[$name]) {
            $this->props[$name] = $value;
          } else {
            throw new Exception("{$name}プロパティは存在しません。");
          }
        }
        //未定義のプロパティを取得すると、配列propsから値を取得
        public function __get($name) {
          //キーの有無をチェックし、存在しないキーはエラー
          if ($this->props[$name]) {
            return $this->props[$name];
          } else {
            throw new Exception("{$name}プロパティは存在しません。");
        }
      }
    }

    class MyTriangle {
      //トレイトの有効化
      use AccessorTrait;

      //プロパティを連想配列として準備
      private $props = [
        'base' => 1,
        'height' => 1
      ];

      public function getArea3() {
        $this->base * $this->height / 2;
      }
    }

    $cls2 = new MyTriangle();
    $cls2->base = 10;
    $cls2->height = 5;
    print $cls2->getArea3();


    //名前競合時の挙動
    class MyParent {
      public function hoge() {
        print 'My Parent';
      }
    }

    trait MyTrait {
      public function hoge() {
        print 'My Trait';
      }
    }

    //MyParent, MyTraitを継承
    class MyChild extends MyParent {
      use MyTrait;

      public function hoge() {
        print 'My Child';
      }
    }

    $cls3 = new MyChild();
    $cls3->hoge();


    //トレイト同士で衝突した場合
    trait MyTrait1 {
      public function hoge() {
        print 'MyTrait1';
      }
    }

    trait MyTrait2 {
      public function hoge(){
        print 'MyTrait2';
      }
    }

    //MyTrait1 / MyTrait2の有効化
    class MyClass2 {
      use MyTrait1, MyTrait2 {
      MyTrait1::hoge insteadOf MyTrait2;
      }
    }

    $cls4 = new MyClass2();
    $cls4->hoge();    //エラーになる
    ?>
 </body>
</html>
