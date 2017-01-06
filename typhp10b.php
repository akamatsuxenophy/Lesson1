<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>typhp10-2</title>
  </head>
  <body>
    <?php
      require_once 'Person1.php';

      $p1 = new Person('リオ', '山田');
      // $p2 = $p1; //オブジェクトを代入
      $p2 = clone $p1;    //　上の代わりにすると答え変わる
      $p2->firstName = '奈美';
      $p2->lastName = '佐藤';
      print_r($p1);
      echo "<br/>";
      print_r($p2);
      echo "<br/>";


      // オブジェクトの比較
      $p1 = new Person('リオ', '山田');
      //オブジェクト変数を参照した場合
      $p2 = $p1;
      var_dump($p1 == $p2);
      var_dump($p1 === $p2);
      //オブジェクト変数を値渡し(コピー)した場合
      $p3 = clone $p1;
      var_dump($p1 == $p3);
      var_dump($p1 === $p3);  //あくまで $p1 と同じ値で別のインスタンスだから false
      echo "<br/>";

      require_once 'person4.php';

      $cls = new Myclass3();
      // MyClassオブジェクトのプロパティをリスト表示
      foreach ($cls as $key => $value) {
        print "{$key} : {$value} <br />";
      }

      print '<hr />';
      // MyClassオブジェクトのプロパティをリスト表示(showPropertyメソッド経由)
      $cls->showProperty();
      echo "<br/>";


      //反復処理のカスタマイズ
      //FriendListにオブジェクトにPersonオブジェクトをセット
      $list = new FriendList();
      $list->add(new Person('太郎', '山田'));
      $list->add(new Person('奈美', '掛谷'));
      $list->add(new Person('健', '高江'));

      //オブジェクトを関数英式で呼び出し
      print $list(1);

      // friendListオブジェクトの複製を生成
      $list2 = clone $list;
      var_dump($list2(1) === $list(1));   //２つは違うオブジェクトだが、２つがさしてるものは同じなので、結果は true

      //デバッグ情報をカスタマイズする - __debugInfo
      $p4 = new Person('小次郎', '多田');
      var_dump($p4);

      // FriendListオブジェクトの内容を順に処理し、そのPerson::showメソッドを実行
      foreach ($list as $value) {
        print $value->show();
      }


      //例外をスローする - throw命令
      class MyUtil {
        public static function getContents($url) {
          //指定されたURLの形式が正しくない場合...
          if (!preg_match('|http(s)?://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?|', $url)) {
            throw new Exception('不正な形式です。');
          }
          $data = @file_get_contents($url);
          //データを取得できなかった場合...
          if (!$data) {
            throw new Exception('指定されたURLが見つかりません。');
          }
          return $data;
        }
      }
      try {
        print MyUtil::getContents('http://www.wings.msn.to/nothing/');
      } catch (Exception $e) {
        print "エラーメッセージ: 指定されたURLは見つかりません。";
      }


      //例外クラスを拡張する
      //自作の例外クラスを定義する
      class UrlSyntxException extends Exception {}
      class UrlRequestException extends Exception {}

      class MyUtil2 {
        //内側で例外を生成するgetContentsメソッド
        public static function getContents ($url) {
          //指定されたURLの形式が正しくない場合...
          if (!preg_match('|http(s)?://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?|', $url)) {
            throw new UrlSyntxException('不正なURLの形式です。');
          }
          $data = @file_get_contents($url);
          //データを取得できなかった場合...
          if (!$data) {
            throw new UrlRequestException('指定されたURLが見つかりません。');
          }
          return $data;
        }
      }

      try {
        print MyUtil2::getContents('http://www.wings.msn.to/nothing/');
      } catch (UrlSyntaxException $e) {
        print "警告: {$e->getMessage()}";
      } catch (UrlRequestException $e) {
        print "エラー: {$e->getMessage()}";
      }


      //エラー報告の処理 (PHP5)
      //エラーハンドラを登録
      set_error_handler(
        function ($errno, $errstr, $file, $line, $context) {
          throw new ErrorException($errstr, 0, $errno, $file, $line);
        }
      );

      try {
        //わざと引数の足りない関数を呼び出し (エラー)
        mb_convert_encoding();
      } catch (ErrorException $e) {
        print "エラーメッセージ: {$e->getMessage()}";
      }
      echo "<br/>";


      //エラー報告の処理 (PHP7)
      // int型の引数を受け取るhoge関数
      function hoge($x) {}

        try {
          //わざと間違った型の引数を渡す (エラー)
          hoge('xxxx');
        } catch (Exception $e) {
          print "例外: {$e->getMessage()}";
        } catch (Error $e) {
          print "エラー: {$e->getMessage()}";
        }



        //マジックメソッド
        //未定義のプロパティを処理する - __get, __set
        $m = new MyMail();
        //必須のプロパティを設定
        $m->to = 'yamada@example.com';
        $m->subject = 'テストメール';
        $m->message = 'こんにちは、MyMailクラスです。';
        //任意のプロパティを設定 (ハイフンは全てアンダースコアで指定すること)
        $m->From = 'admin@example.com';
        $m->X_Mailer = 'MyMail 1.0';
        $m->X_Property = 1;
        $m->X_MSMail_Property = 'High';
        //メールを送信
        $m->send();

        var_dump($m->send());
        echo "<br/>";








































    ?>
  </body>
</html>
