<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test8</title>
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



      //ポリモーフィズ
      require_once 'Person2.php';
      require_once 'Person3.php';

      $tri2 = new Triangle(5, 10);
      $squ2 = new Square(5, 10);
      print "三角形の面積: {$tri2->getArea()}<br/>";
      print "四角形の面積: {$squ2->getArea()}<br/>";


      // 無名クラス
      // interface Runnable {
      //   function run();
      // }
      //
      // class Myclassb {
      //   public function execute(Runnable $rc) {
      //     //ダミー処理後 (未来はなんらかの前処理を実行)
      //     print 'start...';
      //     //利用者側から指摘された処理を実行
      //     $rc->run();
      //     //ダミー処理 (本来はなんらかの後処理を実行)
      //     print 'end...';
      //   }
      // }
      //
      //
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




      class MyClassc {
        protected $data;
        public function ___construct(string $data) {
          $this->data = $data;
        }
        public function getData() {
          return $this->data;
        }
      }

      class Exm extends MyClassc {
        public function getData() {
          print "~{$this->data}~";
        }
      }

      $ex = new Exm('hello');
      $ex->getData();






































    ?>
 </body>
</html>
