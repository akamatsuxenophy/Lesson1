<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8" />
    <title>phpTest5</title>
  </head>
  <body>
    <?php
    //ファイルシステム関数
    //書き込み内容を配列 $data にセット
    $data[] = date('Y/m/d H:i:s');
    $data[] = $_SERVER['SCRIPT_NAME'];
    $data[] = $_SERVER['HTTP_USER_AGENT'];
    $data[] = $_SERVER['HTTP_REFERER'];
    // access.logを追記書き込みモードでオープン
    $file = @fopen('access.log', 'ab') or die('ファイルを開けませんでした！');
    //ファイルをロック
    flock($file, LOCK_EX);
    //ファイルの読み込み
    fwrite($file, implode("\t", $data). "\n");
    //ロックの解除
    flock($file, LOCK_UN);
    //ファイルのクローズ
    fclose($file);
    print 'アクセスログを記録しました。';
    echo "<br/>";
    ?>
  </body>
</html>
