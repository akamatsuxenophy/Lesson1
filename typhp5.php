<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8" />
    <title>phpTest5</title>
  </head>
  <body>
    <?php
    mb_internal_encoding ('UTF-8');
    $str = 'WINGSプロジェクト';
    print mb_strlen ($str); //結果　11
    echo "<br/>";


    // strtolower, strtoupper関数
    print strtolower ('WINGSプロジェクト'); //結果　wingsプロジェクト
    print strtoupper ('wings project'); //結果　WINGS PROJECT
    print lcfirst ('WINGS PROJECT');  //結果　wINGS PROJECT
    print ucfirst ('wings project');  //結果　wings project
    print ucwords ('wings project');  //結果　Wings Project
    echo "<br/>";


    print strtolower ('ＷＩＮＧＳプロジェクト'); //結果　ＷＩＮＧＳプロジェクト
    print mb_strtolower ('ＷＩＮＧＳプロジェクト');  //結果　ｗｉｎｇｓプロジェクト
    echo "<br/>";


    //部分文字列を取得する
    $str2 = 'WINGSプロジェクト';

    print mb_substr ($str2, 5, 2);  //プロ(6文字目から2文字を取得)
    print mb_substr ($str2, 5);     //プロジェクト(6文字目以降を取得)
    print mb_substr ($str2, 5, -4); //プロ(6文字目以降で、末尾4文字をカットしたものを取得)
    print mb_substr ($str2, -6, 2); //プロ(後方6文字目から2文字を取得)
    echo "<br/>";


    //部分文字列を置換する- str_replace関数
    $str3 = 'にわにはにわにわとりがいる';
    print str_replace ('にわ', 'ニワ', $str3, $cnt). '<br/>';
    print "{$cnt}個の置き換えをしました。";
    echo "<br/>";


    //配列を渡す
    $str4 = ['PHPはいい言語です。', 'PHPはいいサーバー実行環境です。'];
    $src = ['PHP', 'いい'];
    $rep = ['PHP 7', '素晴らしい'];    //原則要素数は等しくなければダメ
    print_r (str_replace ($src, $rep, $str4, $cnt2));
    print "{$cnt2}個の置き換えをしました。";
    echo "<br/>";


    $data = 'リオとニンザブロウとナミとリンリン';
    print_r (explode ('と', $data));
    print_r (explode ('や', $data));
    print_r (explode ('と', $data, 2));
    print_r (explode ('と', $data, -2));
    echo "<br/>";


    //特定の文字位置を特定する
    //      mb_strpos / mb_strrpos関数
    // $str3 = 'にわにはにわにわとりがいる';
    print mb_strpos ($str3, 'にわ');  //１文字目なので、結果は0
    print mb_strpos ($str3, 'にわ', 2); //2回目の'にわ'なので、結果は４
    print mb_strpos ($str3, 'かに');  //falseなので表示なし
    print mb_strrpos ($str3, 'にわ'); //最後の'にわ'が7文字目からなので、結果は６
    print mb_strrpos ($str3, 'にわ', -8); //末尾８文字以外での最後に出てくる'にわ'なので、結果は４

    //単に文字列の中にあるかないかの確認
    if (mb_strpos ($str3, 'にわ') !== false) {
      print '文字列が見つかりました。';
    }
    echo "<br/>";


    //文字列を整形する printf関数
    printf ('%sは%sです。', 'ニンザブロウ', 'ハムスター');
    printf ('売上平均 (前月比): %+0-8.3f', 0.198765);
    printf ("売上平均 (前月比): %'*10.3e", 0.198765);
    printf ('%.6sは%sです。', 'ニンザブロウ', 'ハムスター');  //１文字３バイトなので２文字
    printf ('%2$sは%1$sです。 %2$s、大好きです。', 'ニンザブロウ', 'ハムスター');
    echo "<br/>";


    //文字列を変換する - mb_convert_kana
    $str5 = ' WINGSプロジェクト';
    print mb_convert_kana ($str5, 'RKV');
    echo "<br/>";


    //文字エンコーディングを変換する
        //  - mb_convert_encoding / mb_convert_variables
    print mb_convert_encoding ('こんにちは、赤ちゃん！', 'EUC-JP', 'UTF-8, SJIS, JIS');

    $data2 = ['和田', '杉山', '杉沼', '永田', '星山'];
    mb_convert_variables ('EUC-JP', 'UTF-8, SJIS, JIS', $data2);
    print_r ($data2);
    echo "<br/>";


    //電子メールを送信する

    //メールの構成情報の設定
    $to = 'wings@example.com';
    $subject = '独習PHP、改訂版';
    $body = "こんにちは、mb_send_mail関数！ \nどうですか？";
    $headers = "From : user01@example.com\n";
    $headers .= "Cc : yamada@example.com\n";
    $headers .= "X-Mailer : PHP 7\n";
    if (mb_send_mail($to, $subject, $body, $headers)) {
      print 'メールを送信しました。';
    } else {
      print 'メール送信に失敗しました。';
    }
    echo "<br/>";



    //練習問題
    $text = 'サーバーサイド技術';
    print mb_substr ($text, 4, 3);
    echo "<br/>";

    print mb_convert_kana ($text, 'k');
    echo "<br/>";



    //配列関数 - count関数
    $data3 = ['山田', '掛谷', '日尾', '本多', '矢吹'];
    print count ($data3); //結果　５
    echo "<br/>";

    $data4 = [
      ['x-1', 'x-2', 'x-3'],
      ['y-1', 'y-2', 'y-3'],
      ['z-1', 'z-2', 'z-3'],
    ];
    print count ($data4);   //入れ子までは見ない
    echo "<br/>";


    //配列の内容を連結する - array_merge関数
    $ary1 = [1, 2, 5];
    $ary2 = [2, 3, 6];
    $result = array_merge ($ary1, $ary2);
    print_r ($result);
    echo "<br/>";

    $assoc1 = ['Apple' => 'Red', 'Orange' => 'Yelow', 'Melon' => 'Green'];
    $assoc2 = ['Grape' => 'Purple', 'Apple' => 'Green', 'Strawberry' => 'Red'];
    $result2 = array_merge ($assoc1, $assoc2);
    print_r ($result2);
    echo "<br/>";

    $result3 = array_merge_recursive($assoc1, $assoc2);
    print_r ($result3); //'Apple'でもArrayができる
    echo "<br/>";


    //配列の各要素を統合する - implode関数
    $data5 = ['PHP', 'Perl', 'Ruby', 'Python', 'JavaScript'];
    print implode (',', $data5);
    echo "<br/>";


    //配列の先頭・末尾に要素の追加・削除する
    //    array_push, array_pop, array_shift, array_unshift関数
    $data6 = ['高江', '青木', '片渕'];
    print array_push ($data6, '山田', '土井');  //末尾に要素を追加
    print_r ($data6);
    echo "<br/>";

    print array_pop ($data6);   //末尾要素の削除　=> 土井削除
    print_r ($data6);
    echo "<br/>";

    print array_shift ($data6);   //先頭の要素削除 => 高江
    print_r ($data6);
    echo "<br/>";

    print array_unshift ($data6, '掛谷', '横塚', '上垣'); //先頭に要素を追加
    print_r ($data6);
    echo "<br/>";


    //配列に複数要素を追加・置き換え・削除する - array_splice関数
    $data7 = ['高江', '青木', '片渕', '和田', '花田', '佐藤'];
    print_r (array_splice ($data7, 2, 3, ['日尾', '掛谷', '薄井']));
    print_r ($data7);
    echo "<br/>";

    print_r (array_splice ($data7, -3, -2, ['永田', '杉山']));
    print_r ($data7);
    echo "<br/>";

    print_r (array_splice ($data7, 3));
    print_r ($data7);
    echo "<br/>";

    print_r (array_splice ($data7, 1, 0, ['山田', '矢吹']));
    print_r ($data7);
    echo "<br/>";



    //配列から特定範囲の要素を取得する - array_slice
    $data8 = ['高江', '青木', '片渕', '和田', '花田', '佐藤'];;
    print_r (array_slice ($data8, 2, 3));   //一番シンプルに取り出す
    print_r (array_slice ($data8, 2, 3, true)); //元々のインデックス番号を引き継がせる
    print_r (array_slice ($data8, 4));  //指定から末尾まで取得
    print_r (array_slice ($data8, -4, -3));
    echo "<br/>";


    //配列の内容を検索する - array_search関数
    $data9 = ['PHP', 'JavaScript', 'PHP', 'Java', 'C#', '15'];
    var_dump (array_search ('JavaScript', $data9));
    var_dump (array_search ('PHP', $data9));    //帰ってくるのは最初の位置だけ=>[0]
    var_dump (array_search ('JAVA', $data9)); //大文字小文字は区別されるので見つからない
    var_dump (array_search (15, $data9)); //'=='演算子で値を比べるので'15'と15は等しいとみなす
    var_dump (array_search (15, $data9, true)); //'true'つけると厳密になるのでfalseが帰ってくる
    //配列に特定の要素が存在するかを確認
    if (!in_array ('PHP', $data9)) {
      print '見つかりません';
    }
    echo "<br/>";


    //配列の内容をならべかえる
    $data10 = ['Tennis', 'Swimming', 'Soccer', 'Baseball'];
    sort ($data10, SORT_STRING);
    print_r ($data10);
    echo "<br/>";

    rsort ($data10, SORT_STRING);
    print_r ($data10);
    echo "<br/>";

    $data11 = ['Tennis' => 1, 'Swimming' => 1, 'Soccer' => 11, 'Baseball' => 9];
    sort ($data11, SORT_NUMERIC);
    print_r ($data11);
    echo "<br/>";

    $data12 = ['Tennis' => 1, 'Swimming' => 1, 'Soccer' => 11, 'Baseball' => 9];
    asort ($data12, SORT_NUMERIC);
    print_r ($data12);
    echo "<br/>";

    ksort ($data12, SORT_STRING);
    print_r ($data12);
    echo "<br/>";



    //正規表現(PCRE)関数
    $str6 = '彼の電話番号は0399-88-9785、私のは0398-99-1234です。郵便番号はどちらも687-1109です。';
    if (preg_match ('/([0-9]{2,4})-([0-9]{2,4})-([0-9]{4})/', $str6, $nmb)) {
      print "電話番号: {$nmb[0]} <br/>";
      print "市外局番: {$nmb[1]} <br/>";
      print "市内局番: {$nmb[2]} <br/>";
      print "加入者番号: {$nmb[3]} <br/>";
      print_r ($nmb);
    }
    echo "<br/>";

    //PREG_OFFSET_CAPTUREでどこに記載があるのかも取得できる
    if (preg_match ('/([0-9]{2,4})-([0-9]{2,4})-([0-9]{4})/', $str6, $nmb,
    PREG_OFFSET_CAPTURE)) {
      print_r ($nmb);
    }
    echo "<br/>";


    //すべてのマッチ文字列を取得する - preg_match_all関数
    if (preg_match_all ('/([0-9]{2,4})-([0-9]{2,4})-([0-9]{4})/', $str6, $nmb,
    PREG_SET_ORDER)) {
      //取得結果をマッチ順に出力
      foreach ($nmb as $item) {
        print "電話番号: {$item[0]} <br/>";
        print "市外局番: {$item[1]} <br/>";
        print "市内局番: {$item[2]} <br/>";
        print "加入者番号: {$item[3]} <hr/>";
      }
    }
    echo "<br/>";


    //正規表現で文字列を置換する - preg_replace関数
    $msg = <<<EOD
    サンプルは、「サーバーサイド技術の学び舎 (http://www.wings.msn.to/)」から入手
    できます。執筆のノウハウ集「WINGS Knowledge」(http://www31.atwiki.jp/
    wingsproject)もどうぞ。
EOD;
    print preg_replace ('|http(s)?://([\w-];\.)+[\w-]+(/[\w- ./?%&=]*)?|',
    '<a href="$0">$0</a>', $msg);
    echo "<br/>";



    //正規表現で文字列を分割する - preg_split関数
    $today = '2016.12.16';
    $result = preg_split('|[/.\-]|', $today);
    print "{$result[0]}年{$result[1]}月{$result[2]}日";
    echo "<br/>";

    $today2 = '2016-05-14';
    $result2 = preg_split ('|([/.¥-])|', $today2, -1, PREG_SPLIT_DELIM_CAPTURE);
    print_r ($result2); //サブマッチ文字列も配列に入る
    echo "<br/>";


    //ファイルシステム関数
    //書き込み内容を配列 $data13 にセット
    // $data13[] = date('Y/m/d H:i:s');
    // $data13[] = $_SERVER['SCRIPT_NAME'];
    // $data13[] = $_SERVER['HTTP_USER_AGENT'];
    // $data13[] = $_SERVER['HTTP_REFERER'];
    // // access.logを追記書き込みモードでオープン
    // $file = @fopen('access.log', 'ab') or die('ファイルを開けませんでした！');
    // //ファイルをロック
    // flock($file. LOCK_EX);
    // //ファイルの読み込み
    // fwrite($file. implode("\t", $data13). "\n");
    // //ロックの解除
    // flock($file. LOCK_UN);
    // //ファイルのクローズ
    // fclose($file);
    // print 'アクセスログを記録しました。';
    // echo "<br/>";









    //その他の関数
    print abs(-100);
    print base_convert(100, 2, 10);
    print ceil(1234.56);
    print floor(1234.56);
    print fmod(10.5, 5);
    print max(1, 5, 3);
    print min(1, 5, 3);
    print mt_rand(5, 10);
    print pow(2, 4);
    print round(123.456, 2);
    print sqrt(10000);
    print cos(deg2rad(60));
    print sin(deg2rad(30));
    print tan(deg2rad(45));
    print deg2rad(180);
    print exp(1);
    print log10(100);
    print log(125, 5);
    echo "<br/>";


    //変数を破棄する - unset関数
    $str7;
    var_dump($str7);
    $str7 = '代入';
    var_dump($str7);
    echo "<br/>";

    unset($str7);
    var_dump($str7);
    echo "<br/>";


    //変数のデータ型を判定する - is_xxxxx関数
    var_dump(is_int(101));
    echo "<br/>";
    var_dump(is_int('101'));
    echo "<br/>";
    var_dump(is_numeric('101'));
    echo "<br/>";
    var_dump(is_float(1.5E8));
    echo "<br/>";
    var_dump(is_resource(fopen('access.log', 'rb')));
    echo "<br/>";
    var_dump(is_null(''));
    echo "<br/>";



    //章問題
    //1-1
    $words = 'PHPはPHP:Hypertext Preprocessorの略です。';
    if (preg_match ('/PHP/', $words, $php,
    PREG_OFFSET_CAPTURE)) {
      print_r ($php);
    }
    echo "<br/>";

    //1-2
    $tw ='ボクの名前はリオです。';
    str_replace('ボク', '私', $tw);
    print str_replace('リオ', '凛生', $tw);
    echo "<br/>";

    //1-3
    print ucwords ('wngs knowledge');
    echo "<br/>";

    //2-1
    $testData = ['高江', '青木', '片渕'];
    array_push($testData, '山田', '日尾');
    print_r($testData);
    echo "<br/>";

    //2-2
    array_unshift($testData, '掛谷', '土井');
    print_r($testData);
    echo "<br/>";

    //2-3
    print_r(array_slice($testData, 2, 3));
    echo "<br/>";

    //4
    print pow(5, 3);
    echo "<br/>";

    print abs(-12);
    echo "<br/>";

    $x = 5;
    print($x);
    echo "<br/>";
    unset($x);
    var_dump($x);
    ?>
  </body>
</html>
