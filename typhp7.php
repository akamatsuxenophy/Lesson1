<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test7</title>
  </head>
  <body>
    <?php
    date_default_timezone_set('America/Los_Angeles');
    $now = new DateTime();
    print $now->format('Y年m月d日 H:i:s');
    echo "<br/>";
    $dt1 = new DateTime(null, new DateTimeZone('Asia/Ulan_Bator'));
    print $dt1->format('Y年m月d日 H:i:s');
    echo "<br/>";
    $dt2 = new DateTime(null, new DateTimeZone('Europe/London'));
    print $dt2->format('Y年m月d日 H:i:s');
    echo "<br/>";

    $now2 = new DateTime();
    $now2 -> setDate(2016, 6, 25);
    $now2 -> setTime(14, 80, 59);
    print $now2 -> format('Y年m月d日 H:i:s');
    echo "<br/>";

    $now3 = new DateTime();
    $now3 -> setTimestamp(time());
    print $now3 -> format('Y年m月d日 H:i:s');
    echo "<br/>";


    //日付・時刻値を指定のフォーマットで整形する - formatメソッド
    $now4 = new DateTime();
    print $now4 -> format('Y年m月d日 (D) g:i:s a');
    echo "<br/>";
    print $now4 -> format('当月の日数: t日');
    echo "<br/>";
    print $now4 -> format('L') ? '閏年です。' : '閏年ではありません。';
    echo "<br/>";
    print $now4 -> format('DteTime::RSS');
    echo "<br/>";


    // createFormFormatメソッド
    // $fmt = 'Y年m月d日 H時i分s秒';
    // $time = '2016年12月21日';
    // $dt3 = DateTime::createFormFormat($fmt, $time);
    // print $dt3 -> format('Y-m-d H:i:s');
    // echo "<br/>";

    $now5 = new DateTime('2016/09/25 17:30:00');
    $now5 -> add(new DateInterval('P1YT10H'));
    print $now5 -> format('Y年m月d日 H:i:s');
    echo "<br/>";
    $now5 -> sub(new DateInterval('P3MT20M'));
    print $now5 -> format('Y年m月d日 H:i:s');
    echo "<br/>";


    //日付・時刻の差分を取得する
    $interval = $now -> diff($now5, true);
    $now5 -> add(new DateInterval('P1YT10H'));
    print $interval -> format('%Y年%M月%D日 %H:%I:%S');
    echo "<br/>";


    //日付・時刻関数
    //カレンダーをテキスト表示するcalendor関数 (引数$yearは年、$monthは月)
    function calendor ($year, $month) {
      // 1~31　までの間でループ処理
      for ($i = 1; $i < 32; $i++) {
        //日付 ($i) が該当月の妥当な日である場合のみ表示
        if (checkDate ($month, $i, $year)) {print "{$i} &nbsp;";}
      }
    }
    print '2016年２月のカレンダー: <br/>';
    calendor (2016, 2);
    echo "<br/>";


    //練習
    $now6 = new DateTime ('2016/12/04');
    print $now6 -> format('Y年m月d日 (D)');
    echo "<br/>";
    ?>
  </body>
</html>
