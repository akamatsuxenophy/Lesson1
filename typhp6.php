<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test6</title>
  </head>
  <body>
    <?php
    //チェックが厳しくなる
    declare(strict_types=1);

    $base = 8;    //底辺
    $height = 10;   //高さ
    $area = $base * $height / 2;
    print "三角形の面積は{$area}です。";
    echo "<br/>";


    //ユーザー定義関数の基本(上のコードで関数を作る)
    function getTrianglArea ($base, $height) {
      return $base * $height / 2;
    }

    $area2 = getTrianglArea(9, 10);
    print "三角形の面積は{$area2}です。";
    echo "<br/>";


    // function getTrianglAreaB(float $base, float $height) {
    //   return $base * $height / 2;
    // }
    //
    // $area3 = getTrianglAreaB(7, 9);
    // print "三角形の面積は{$area2}です。";
    // echo "<br/>";


    // function getTrianglArea3(float $base, float $height): float {
    //   return $base * $height / 2;
    // }


    //関数を定義する位置
    $area3 = getTrianglArea3(8,10);
    print "三角形の面積は{$area3}です。";

    function getTrianglArea3 ($base, $height) {   //後ろでもOK
      return $base * $height / 2;
    }
    echo "<br/>";


    // $area4 = getTrianglArea4 (8, 10);

    // if (true) {
    //   function getTrianglArea4($base, $height) {
    //     return $base * $height / 2;   //エラーになる
    //   }
    // }


    //関数なないでの関数
    test(); //これを出すとエラーが消える
    $area5 = getTrianglArea5 (8, 10);
    print "三角形の面積は{$area5}です。";

    function test() {
      function getTrianglArea5 ($base, $height) {
        return $base * $height / 2;
      }
    }
    echo "<br/>";


    //練習
    $area6 = getDiamondArea (20, 25);
    print "菱形の面積は{$area6}です。";
     function getDiamondArea ($diagonal1, $diagonal2) {
       return $diagonal1 * $diagonal2 / 2;
     }
     echo "<br/>";


     $x = 10;

     function checkScope () {
       return ++$x; //上の$xとは別物と見なされてるので、++0と同じ
     }

     print checkScope();  // 0++なので、結果 1
     echo "<br/>";
     print $x;      //何も触ってないので、結果 10
     echo "<br/>";


     // global命令
     $x2 = 10;

     function checkScope2() {
       global $x2;    //これで$x2がグローバル関数と見なされます
       return ++$x2;
     }
     print checkScope2();
     echo "<br/>";
     print $x2;
     echo "<br/>";


     function checkStatic () {
       $x3 = 0;
       return ++$x3;
     }

     print checkStatic();
     echo "<br/>";
     print checkStatic();  //ローカル関数は呼び出されるたびに初期化される
     echo "<br/>";


     function checkStatic2 () {
       static $x4 = 0;
       return ++$x4;
     }

     print checkStatic2();
     echo "<br/>";
     print checkStatic2();
     echo "<br/>";
     print $x4;
     echo "<br/>";


     //インクルードファイルのスコープ
     //外
     require_once 'scope_included.php';
     print $scope;
     echo "<br/>";

     //中
     function checkScope3 () {
       require_once 'scope_included.php';
       return $scope;
     }
     print checkScope3();
     print $scope;
     echo "<br/>";


     // unset関数の挙動
     $x5 = 10;
     function checkScope4 () {
       global $x5;
       unset ($x5); //ここで一回nullになる
       return ++$x5; //ここで１になる
     }
     print checkScope4();
     echo "<br/>";
     print $x5;   //グローバルなので functionないで影響しない
     echo "<br/>";


     //静的変数を破棄した場合、その関数での以降の処理でのみ変数を破棄します。
     function checkStatic3 () {
       static $x6 = 0;
       $x6++;
       print "unset前: {$x6}";
       unset($x6);
       $x6 = 13;
       print "unset後: {$x6}<br/>";
     }

     checkStatic3();
     checkStatic3();
     echo "<br/>";


     //引数の様々な記法
     //引数のデフォルト値
     function getTrianglArea6 ($base = 5, $height = 1) {
       return $base * $height / 2;
     }

     $area7 = getTrianglArea6();
     print "参加けいの面積は{$area7}です。";
     $area7 = getTrianglArea6(10);    //$heightだけ省略したことになる
     print "三角形の面積は{$area7}です";
     $area7 = getTrianglArea6(10, 5);
     print "三角形の面積は{$area7}です。";
     echo "<br/>";


     //引数の参照引き渡し
     function increment ($num) {
       $num++;
       return $num;
     }

     $value = 10;
     print increment($value);
     echo "<br/>";
     print $value;
     echo "<br/>";



    //  //可変長引数の関数
    //  function sum ($args) {
    //    //結果を格納するための変数$result
    //    $result = 0;
    //    //取得した引数を順に加算処理
    //    foreach ($args as $arg) {
    //      $result += $arg;
    //    }
    //    return $result;
    //  }
    //  print sum(7, 3, 10);
    //  print sum(11, -5, 4, 88);


     function sum () {
       //結果を格納するための変数　$result
       $result = 0;
       //引数を配列として取得
       $args = func_get_args();
       //取得した引数を順に加算処理
       foreach ($args as $arg) {
         $result += $arg;
       }
       return $result;
     }
     print sum(7, 3, 10);
     echo "<br/>";
     print sum(11, -5, 4, 88);
     echo "<br/>";


     //可変長引数と通常の引数の混在
     function replaceContents ($path, $args) {
       //指定されたパスからファイルを読み込む
       $data = file_get_contents ($path);
       //可変長引数を順番に処理し、{0}, {1}, ...と置き換え
       for ($i = 0; $i < count($args); $i++) {
         $data = str_replace ('{'.($i).'}', $args[$i], $data);
       }
       return $data;
     }
     // scope_included.phpを読み込み＆出力
     print replaceContents ('data.dat', '鈴木太郎', '2017年12月21日');
     echo "<br/>";


     //親スコープの変数を引き継ぐ - use命令
     function my_array_walk ($array, $func) {
       foreach ($array as $key => $value) {
         $func ($value, $key);
       }
     }
     //結果を求める為の関数
     $data2 = [100, 50, 10, 5];
     //結果値を格納する為の変数
     $result2 = 0;
     my_array_walk ($data2, function ($value, $key) use ($result2) {
       $result2 += $value;
     });
     print "合計値: {$result2}";


     function hoge () {
       $data = [100, 50, 10, 5];
       $result += $value;

       my_array_walk ($data, function ($value, $key) {
         global $result;
         $result += $value;
       });
       print "合計値: {$result}";
     }

     hoge();
     echo "<br/>";



     //ジェネレータ
     function myGen () {
       yield 'あいうえお';
       yield 'かきくけこ';
       yield 'さしすせそ';
     }
     foreach (myGen() as $value) {
       print $value.'<br/>';
     }


     //素数を求めるジェネレータ
     function getPrimes () {
       $num = 2;  //素数の開始値
       //2から順に素数判定し、素数の場合にだけ yield(無限ループ)
       while (true) {
         if (isPrime($num)) {yield $num;}
         $num++;
       }
     }
     //引数$valueが素数かどうかを判定
     function isPrime ($value) {
       $prime = true;   //素数かどうかを表すフラグ
       //2〜sqrt ($value)で、$valueを割り切れる(余りが 0)のものがあるか
       for ($i = 2; $i <= floor (sqrt($value)); $i++) {
         if ($value % $i === 0) {
           $prime = false;
           break;
         }
       }
       return $prime;
     }

     //素数を順に出力
     foreach (getPrimes() as $prime) {
       //素数が101以上になったら終了　(これがないと無限ループになるので注意！)
       if ($prime > 100) {die();}
       print $prime. ',';
     }


     //ジェネレータの結果を取得する
     function readlines ($path) {
       $i = 0; //行数
       $file = fopen($path, 'rb') or die('ファイルが見つかりません');
       //行単位にテキストを取得&yield
       while ($line = fgets ($file, 1024)) {
         $i++;
         yield $line;
       }
       fclose($file);
       //読み込んだテキストの行数を返す
      //  return $i;
     }

     // sumple.datから行単位にテキストを出力
     $gen = readLines('sample.dat');
     foreach ($gen as $line) {
       print $line.'<br/>';
     }
     //最終的に読み込んだ行数を取得
     print "{$gen->getReturn()}行がありました。";
    ?>
  </body>
</html>
