<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>phpTest2</title>
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
    echo "<br/>";



    $data7 = [1 => '山田', 2 => '掛谷', 3 => '日尾', 4 => '本多'];
    print_r($data7);
    echo "<br/>";


    $data8 = [1 => '山田', 4 => '掛谷', '日尾'];
    print_r($data8);
    echo "<br/>";


    $data9 = [-10 => '山田', '日尾'];
    print_r($data9);
    echo "<br/>";


    $data10 = ['山田' => '太郎', 15 => '二郎', '鈴木' => '三郎', '四郎', '五朗'];
    print_r($data10);
    echo "<br/>";


    //キーは整数値、文字列に変換される
    $data11 = [
      'str' => 0, //文字列
      '7' => 1, //整数
      '07' => 2,  //整数(のような文字列)
      10.5 => 3,  //文字列小数点数
      true => 4,  //bool値
      null => 5,  //null値
    ];
    print_r($data11);
    echo "<br/>";



    //キャスト
    var_dump((int)1530.95); //結果: int(1530)
    var_dump((int)-1530.95);  //結果: int(-1530)
    var_dump((int)true);  //結果: int(1)
    var_dump((string)true); //結果: string(1) "1"
    var_dump((int)false); //結果: int(0)
    var_dump((string)false);  //結果: string(0) ""
    var_dump((array)108); //結果: array(1)  {[0] => int(108)}
    var_dump((unset)1530.95); //結果: null
    echo "<br/>";


    //文字列から文字列から数値の型へのキャスト
    var_dump((int)'0b11');  //結果: int(0)
    var_dump((int)'0777');  //結果: int(777)
    var_dump((int)'0xFF');  //結果: int(0)
    var_dump((int)'1E4');  //結果: int(1)
    var_dump(bindec('0b11')); //結果: int(3)
    var_dump(octdec('0777')); //int(511)
    var_dump(hexdec('0xFF')); //結果: int(255)
    var_dump((float)'1E4')  ; //結果: float(10000)
    ?>
  </body>
</html>
