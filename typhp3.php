<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>phpTest3</title>
  </head>
  <body>
    <?php
    //代数演算子
    //文字列混同の演算
    print '108' + '15'; //結果: 123
    echo "<br/>";
    print '108' + '1.5XYZ'; //結果: 109.5
    echo "<br/>";
    print '108' + 'XYZ10';  //結果: 108(後ろに数値文字列があっても０とみなされる)
    echo "<br/>";
    print '108' + '1.5XYZ10'; //結果: 109.5
    echo "<br/>";
    print '108' + '1.5E1';  //結果: 123
    echo "<br/>";
    print '108' + '0b11'; //結果: 108
    echo "<br/>";
    print '108' + '010';  //結果: 118
    echo "<br/>";
    print '108' + '0x1A'; //結果: 108(php5では134になる)
    echo "<br/>";


    //加算子(++)、減算子(--)
    $x = 10;
    $y = ++$x;
    print $x; //結果　11
    echo "<br/>";
    print $y; //結果　11
    echo "<br/>";

    $i = 10;
    $j = $i++;
    print $i; //結果　11
    echo "<br/>";
    print $j; //結果　10
    echo "<br/>";


    //マジカルインクリメント
    $i2 = 'Z';
    print ++$i2;  //結果　AA
    print ++$i2;  //結果　AB
    echo "<br/>";

    $j2 = 'T8';
    print ++$j2;  //結果　T9
    print ++$j2;  //結果　U0
    echo "<br/>";


    //浮動小数点の演算
    print floor((0.1 + 0.7) * 10);  //結果　7(二進法の影響)
    echo "<br/>";


    $add = bcadd(0.1, 0.7, 1);
    $mul = bcmul($add, 10, 1);
    print floor($mul);  //結果　8
    echo "<br/>";



    //配列の結合
    $assoc1 = [
      'Apple' => 'Red',
      'Orange' => 'Yellow',
      'Melon' => 'Green'
    ];
    $assoc2 = [
      'Grape' => 'Purple',
      'Apple' => 'Green', //無視される
      'Strawberry' => 'Red'
    ];
    $result = $assoc1 + $assoc2;
    print_r($result);
    echo "<br/>";

    $ary1 = [1, 3, 5];
    $ary2 = [2, 3, 6];  //こっちは全部無視される
    $result = $ary1 + $ary2;
    print_r($result);
    echo "<br/>";


    //代入演算子
    $x2 = 1;
    $y2 = $x2;  //$x2の値を$y2にコピー
    $x2 = 5;  //$x2の値を変更
    print $y2;  //結果　1($y2は影響を受けない)
    echo "<br/>";


    //参照(リファレンス)による代入
    $x3 = 1;
    $y3 = &$x3; //$x3のアドレスをコピー(参照による代入は & を使う)
    $x3 = 5;    //$x3の値を変更
    print $y3;  //結果　5
    echo "<br/>";


    //比較演算子
    //文字列混在の比較
    var_dump('3.14' == 3.14000);  //結果　bool (true)
    var_dump('3.14E2' == 314);  //結果　bool (true)
    var_dump('0x10' == 16); //結果　bool (false)
    var_dump('010' == 8); //結果 bool (false)
    var_dump('0b11' == 3); //結果　bool (false)
    var_dump('13xyz' == 13);  //結果　bool (true)
    var_dump('X' == 0); //結果　bool (true)
    var_dump('3.14' == '3.14000');  //結果　bool (true)
    var_dump('3.14E2' =='314');  //結果　bool (true)
    var_dump('13xyz' == '13'); //結果 bool (false)
    echo "<br/>";



    //厳密な等価演算子
    var_dump('3.14E2' === 314); //結果　bool (false)
    var_dump('X' === 0);  //結果　bool false
    var_dump('1' === 1);  //結果　bool false


    //浮動小数点の比較
    CONST EPSILON = 0.00001;
    $x4 = 0.123456;
    $y4 = 0.123455;
    var_dump(abs($x4 - $y4) < EPSILON); //結果　bool (true)
    echo "<br/>";


    //配列の比較

    $data1 = [1, 2, 3];
    $data2 = [1, 5];
    var_dump($data1 < $data2);  //結果　bool (false)

    $data3 = [1, 2, 3];
    $data4 = [1, 5, 1];
    var_dump($data3 < $data4);  //結果　bool (true)

    $data5 = [1, 2, 3];
    $data6 = [1, 2, '3'];
    var_dump($data5 == $data6); //結果　bool (true)
    var_dump($data5 === $data6);  //結果　bool (false)
    echo "<br/>";


    //条件演算子
    $score = 75;
    print $score >= 70 ? '合格！' : '不合格...'; //結果　合格！
    echo "<br/>";


    //条件演算子の省略構文
    $message = '';
    print $message ?: '空です。'; //結果　空です。
    echo "<br/>";


    //その他の演算子
    $x5 = 'こんにちは';
    $y5 = '世界！';
    print $x5.$y5;  //結果　こんにちは世界！

    $x6 = 0xFF;
    $y6 = 1.5E2;
    print $x6.$y6;
    echo "<br/>";


    //実行演算子
    $result = `dir`;  //dirコマンドを実行
    print mb_convert_encoding($result, 'UTF-8', 'SJIS');
    echo "<br/>";

    @print 1 / 0;

    ?>
  </body>
</html>
