<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test8</title>
  </head>
  <body>
    <!-- action属性にはポストデータの送信先を指定 -->
    <form method="GET" action="post2.php">
      <label for="name">名前</label>
      <input id="name" type="text" name="name" size="15" /><br/>


      <!-- 複数の値を持つ要素にアクセスする -->
      あなたがよく使用するサーバーサイド技術は？<br/>
      <input id="php" type="checkbox" name="arch" value="PHP" />
      <label for="php" >PHP</label>
      <input id="jsp" type="checkbox" name="arch" value="JSP&サーブレット" />
      <label for="jsp">JSP&サーブレット</label>
      <input id="asp" type="checkbox" name="arch" value="ASP.NET" />
      <label for="asp">ASP.NET</label><br/>

      <input type="submit" value="送信" />
    </form>


    <!-- ハイパーリンク経由で値を受け渡しする -->
    <a href="post2.php?keyword=<?=urlencode('クエリ情報 (&%)') ?>">
      結果を確認
    </a><br/>


    <!-- ヘッダ情報 -->
    <!-- <table border="1">
      <?php
        // $_SERVERのキー・値を順番に取得
        foreach ($_SERVER as $key => $value) {
          //キー ($key)　が　「HTTP_」で始まる場合のみ、その値を出力
          if (mb_strpos($key, 'HTTP_') === 0) {
      ?>

      <tr valign="top">
        <th><?=$key ?></th>
        <td><?=$value ?></td>
      </tr>
      <?php
          }
        }
      ?> -->


      <?php
        //ページの有効期限を過去の日付に設定
        header('Expires: Sun, 15 Jan 1970 00:00:00 GMT');
        //最終更新日を常に更新
        header('Last-Modified: '.gmdate("D, d M Y H:i:s").'GMT');
        //キャッシュを向こうに設定
        header('Cache-Control: no-store, no-cache, must-revalidate');
        header('Cache-Control: post-check=0, pre-check=0, false');
      ?>

      <!-- 強制的に認証ダイアログを表示する -->
      <?php
      //認証ユーザ名が送信されているかどうかを判定
      if (!isset($_SERVER['PHP_AUTH_USER'])) {
        //認証ユーザが未送信の場合は未確認ステータスを発行(ダイアログを表示)
        header('HTTP/1.1 401 Unauthorized');
        header('WWW-Authenticate: Basic realm="SelfPHP"');
        print 'この画面へのアクセスは認められませんでした。';
        die();
        //認証ユーザ名が送信されている場合はユーザ名 / パスワードを確認
      } else {
        //認証の成否に応じて対応するメッセージを表示
        if ($_SERVER['PHP_AUTH_USER'] === 'admin_usr' &&
        $_SERVER['PHP_AUTH_PW'] === 'admin_pass') {
          print '正しく認証が行われました。';
        } else {
          print 'ユーザ名、またはパスワードが間違ってます。';
        }
      }
      ?>


      <!-- Cookie情報の読み書き -->
      <form method="POST" action="post2.php">
        <label for="email">メールアドレス</label>
        <input id="email" type="text" name="email" size="40"
         value="<?=$_COOKIE['email']?>" />


         <!-- 基本的なセッション情報の読み書き -->
         <label for="email">メールアドレスsession</label>
         <input id-"emailSessn" type="text" name="emailSessn" size="40"
          value="<?=$_SESSION['email']?>" />
        <input type="submit" value="送信">
      </form>
  </body>
</html>
