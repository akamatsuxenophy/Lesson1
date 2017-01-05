<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test8</title>
  </head>
  <body>
    <?php
      // データベースの接続
      $dsn = 'mysql:dbname=selfphp: host=127.0.0.1; charset=utf8';
      $url = 'selfurl';
      $passwd = 'selfpass';

      try {
        $db = new PDO($dsn, $url, $passwd);
        print '接続に成功しました。';
      } catch (PDOException $e) {
        print "接続エラー: {$e->getMessage()}";
      } finally {
        $db = null;
      }


      require_once 'DbManager.php';

      $db2 = getDb();
      $db2->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
      $db2->exec('MECHA KUCHA');
      // エラーコードが「00000」でない場合、エラーが発生したとみなす
      if ($db->errorCode() !== '00000') {
        $info = $db->errorInfo();
        print "エラーコード: {$info[0]} <br/>";
        print "エラーコード(ドライバ): {$info[1]} <br/>";
        print "エラーメッセージ: {$info[2]}";
      }


     ?>
  </body>
</html>
