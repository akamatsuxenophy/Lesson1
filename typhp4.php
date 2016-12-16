<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>phpTest4</title>
  </head>
  <body>
    <?php
    //制御構文

    //条件分岐
    $x = 10;
    if($x === 10) {
      print '変数$xは10です。';
    } else {
      print '変数$xは10ではありません。';
    }   //結果: 変数$xは10です。
    echo "<br/>";


    //if~elseif文
    $x2 = 35;
    if($x2 > 20) {
      print '変数$x2は20よりも大きいです。';
    } elseif($x2 > 10) {
      print '変数$x2は10よりも大きいです。';
    } else {
      print '変数$x2は10以下です。';
    } //結果　変数$x2は20よりも大きいです。
    echo "<br/>";


    //入れ子
    $x3 = 1;
    $y3 = 0;
    if($x3 === 1) {
      if($y3 === 1) {
        print '変数$x3、$y3は1です。';
      } else {
        print '変数$x3は1ですが、変数$y3は1ではありません。';
      }
    } else {
      print '変数$x3は1ではありません。';
    } //結果　変数$x3は1ですが、変数$y3は1ではありません。
    echo "<br/>";


    //多岐分岐
    $rank = '甲';
    if($rank == '甲') {
      print '大変良いです。';
    } elseif($rank == '乙') {
      print '良いです。';
    } elseif($rank == '丙') {
      print 'もう少し頑張りましょう。';
    } else {
      print '???';
    } //結果　大変良いです。
    echo "<br/>";


    //上の分をswitch命令に書き換えたもの
    $rank = '甲';
    switch($rank) {
      case '甲' :
        print '大変良いです。';
        break;
      case '乙' :
        print '良いです。';
        break;
      case '丙' :
        print 'もう少し頑張りましょう。';
        break;
      default :
        print '???';
        break;
    }   //結果　大変良いです。
    echo "<br/>";


    //break文を意図的に省略するパターン
    $drink = 'ビール';
    switch($drink) {
      case '日本酒':
      case 'ビール':
      case 'ワイン':
        print '醸造酒です。';
        break;
      case 'ブランデー':
      case 'ウィスキー':
        print '蒸留酒です。';
        break;
    }   //結果　醸造酒です。
    echo "<br/>";



    //繰り返しの処理
    //while / do~whileの命令
    $i =1;
    while($i < 6) {
      print "{$i}番目のループです。 <br/>";
      $i++;
    }
    echo "<br/>";


    $i2 = 1;
    do {
      print "{$i2}番目のループです。　<br/>";
      $i2++;
    } while ($i2 < 6);
    echo "<br/>";


    //for文
    for($i3 = 1;  $i3 < 6; $i3++) {
      print "{$i3}番目のループです。　<br/>";
    }
    echo "<br/>";


    //foeach命令
    $data = ['高江', '掛谷', '日尾', '薄井', '和田'];
    foreach ($data as $value) {
      print "名前は{$value}<br/>";
    }
    echo "<br/>";

    $data2 = ['高江' => '男', '掛谷' => '女', '日尾' => '男', '薄井' => '女', '和田' => '男'];
    foreach ($data2 as $key => $value) {
      print "{$key}: {$value}<br/>";
    }
    echo "<br/>";


    //値変数の参照渡し
    $data3 = ['高江', '掛谷', '日尾', '薄井', '和田'];
    foreach($data3 as &$value) {
      $value = 'NEW'.$value;
    }
    print_r($data3);
    echo "<br/>";

    //break命令
    $sum = 0;
    for($i4 = 1; $i4 <= 100; $i4++) {
      $sum += $i4;
      if($sum > 1000) {break;}
    }
    print "合計が1000を超えるのは、1〜{$i4}を加算した時です。";
    //結果　合計が1000を超えるのは、1〜45を加算した時です。
    echo "<br/>";


    //continue命令
    $sum2 = 0;
    for($i5 = 1; $i5 <= 100; $i5++) {
      if($i5 % 2 !== 0) {continue;}
      $sum2 += $i5;
    }
    print "合計値は{$sum2}です。";   //結果　合計値は2550です。
    echo "<br/>";


    // breakとcontinueの入れ子
    for($i6 = 1; $i6 < 10; $i6++) {
      for($j6 = 1; $j6 <10; $j6++) {
        $result = $i6 * $j6;
        if($result > 40) {break;}       //一回でも４０になったら抜ける-> {break 2;}
        print "{$result} &nbsp;";
      }
      print '<br/>';
    }
    echo "<br/>";


    //switchでのcontinue
    //$i7を1〜3で変化させるループ
    for($i7 = 1; $i7 < 4; $i7++) {
      $result = 0;
      switch($i7) {
        case 1:
        case 3:
          //$i7 = 1, 3の場合のみ変数$result2を計算
          $result2 = $i7 * $i7;
          break;
        case 2:
          continue 2;
      }
      print "{$i7}の2乗は{$result2}です。<br/>";
    }
    echo "<br/>";

    //練習
    $sum3 = 0;
    $i8 = 1;
    while($i8 <= 100) {
      $i8++;
      if($i8 % 2 !== 0) {continue;}
      $sum3 += $i8;
    }
    print "合計値は{$sum3}です。";
    echo "<br/>";


    $sum4 = 0;
    for($i9 = 1; $i9 <= 100; $i9++) {
      if($i9 % 2 === 0) {continue;}
      $sum4 += $i9;
    }
    print "合計値は{$sum4}です。";
    echo "<br/>";


    $sum5 = 0;
    $i10 =1;
    while($i10 <= 100) {
      $i10++;
      $sum5 += $i10;
      if($sum5 > 1000) {break;}
    }
    print "合計が1000を超えるのは、1〜{$i10}を加算した時です。";
    echo "<br/>";


    $language ='JavaScript';
    switch($language) {
      case 'PHP':
      case 'JSP':
      case 'ASP':
        print 'サーバーサイド技術';
        break;

      case 'JavaScript':
      case 'VBScript':
        print 'クライアントサイド技術';
        break;
    }
    echo "<br/>";


    $language2 = 'PHP';
    if($language2 === 'PHP' || $language2 === 'JSP' || $language2 === 'ASP') {
      print 'サーバーサイド技術';
    } elseif($language2 === 'JavaScript' || $language2 === 'VBScript') {
      print 'クライアントサイド技術';
    } else {
      print '???';
    }
    ?>
  </body>
</html>
