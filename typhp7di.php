<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test7b</title>
  </head>
  <body>
    <table border = "1">
      <tr>
        <th>ファイル</th><th>サイズ</th><th>最終アクセス日</th><th>最終更新日</th>
      </tr>

      <?php
      //カレントフォルダをオープン
      $dir = new DirectoryIterator('./');
      //フォルダの内容を順番に読み込み
      foreach ($dir as $file) {
        //読み込んだ要素がファイルである (サブフォルダなどでない)場合のみ表示処理
        if ($file -> isFile()) {
          date_default_timezone_set('America/Los_Angeles');   //時間の設定
      ?>

      <tr>
        <td><?php print mb_convert_encoding($file -> getFileName(),
        'UTF-8', 'SJIS-WIN'); ?></td>
        <td><?php print $file -> getSize(); ?>B</td>
        <td><?php print date('Y/m/d H:i:s', $file -> getATime()); ?></td>
        <td><?php print date('Y/m/d H:i:s', $file -> getMTime()); ?></td>
      </tr>

      <?php
        }
      }
      ?>
    </table>
  </body>
</html>
