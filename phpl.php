<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>phpTest</title>
  </head>
  <body>
    <?php
    //print命令は指定された文字列を表示するための命令です。
    print 'こんにちわ <br/>';
    print 'こんにちは、みなさん <br/>';

    //変数
    $msg = 'こんにちわ <br/>';
    print $msg; //結果: こんにちわ


    //可変変数
    $x = 'title';
    $title = 'PHP: HyperText Preprocessor <br/>';
    print $$x;  //結果はPHP: HyperText Preprocessor
    //$$x === ${$x} でも表せる


    //定数
    const TAX = 1.08;   //定数名の前に『$』はつけずにいきなり書いていい
    $price = 1000;
    $sum = $price * TAX;
    print $sum + '<br/>'; //結果: 1080


    //文字列のクォート
    $str = "He's teacher. </br/>";
    print $str;  //結果: He's teacher.

    //『\』でクォートを切れる
    $str2 = 'He\'s "GREAT" teacher. </br/>';
    print $str2;  //結果: He's "GREAT" teacher. </br/>


    $title = 'サーバーサイド技術の学び舎 - WINGS';
    $data1 = "サポートサイト\t「{$title}」へ <br/>";  //ダブルだと記号が読み込まれる
    $data2 = 'サポートサイト\t「{$title}」へ <br/>';  //シングルだと記号も文字列になる
    print $data1; //結果: サポートサイト	「サーバーサイド技術の学び舎 - WINGS」へ
    print $data2; //結果: サポートサイト\t「{$title}」へ


    $str3 = 'PHP(HyperText Preprocessor)';
    $msg2 = <<<EOD
      {$str3}は、サーバーサイドで動作する簡易なスクリプト言語です。
      まずは、本書でじっくり基礎固めしましょう。<br/>
      "Let's start, everyone!"<br/>

EOD;
//締めの前後はスペース含めて何も入れない
    print $msg2;


    //null
    $n1 =   //値が何も入ってないからnull
    $n2 = null; //明示的にnullを代入


    //配列
    //array.PHP
    $data3 = ['山田', '掛谷', '日尾', '本多', '矢吹'];
    print $data3[3];  //結果、４番目の本多を出力
    echo "<br/>";

    //リスト出し
    print_r($data3);
    echo "<br/>";


    //連想配列

    $member = [
      '山田' => '札幌',
      '掛谷' => '仙台',
      '日尾' => '東京',
      '本多' => '名古屋',
      '矢吹' => '大阪',
    ];
    print $member['山田'];  //結果: 札幌
    echo "<br/>";

    //リスト
    print_r($member);
    echo "<br/>";


    //多次元配列
    $data4 = [
      ['x-1', 'x-2', 'x-3'],
      ['y-1', 'y-2', 'y-3'],
      ['z-1', 'z-2', 'z-3'],
    ];
    print $data4[1][0];
    echo "<br/>";


    //三次元配列
    $data5 = [
      [
        ['a-1', 'a-2', 'a-3'],
        ['b-1', 'b-2', 'b-3'],
        ['c-1', 'c-2', 'c-3'],
      ],
      [
        ['d-1', 'd-2', 'd-3'],
        ['e-1', 'e-2', 'e-3'],
        ['f-1', 'f-2', 'f-3'],
      ],
      [
        ['g-1', 'g-2', 'g-3'],
        ['h-1', 'h-2', 'h-3'],
        ['i-1', 'i-2', 'i-3'],
      ],
    ];
    print $data5[2][1][0];
    echo "<br/>";

    // 連想拝謁と多次元配列
    $data6 = [
      [
        'name' => '山田',
        'address' => '札幌',
        'age' => '35',
      ],
      [
        'name' => '掛谷',
        'address' => '仙台',
        'age' => '28',
      ],
      [
        'name' => '日尾',
        'address' => '東京',
        'age' => '40',
      ],
    ];

    print $data6[0]['address'];

































































































    ?>
  </body>
</html>
