<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>typhp10-2</title>
  </head>
  <body>
    <?php
      //オブジェクトの反復処理
      class MyClass3 {
        //それぞれのアクセス権限でプロパティを定義
        public $pub = 'public';
        protected $pro = 'protected';
        private $pri = 'private';

        //プロパティをリスト表示するための showPropertyメソッド
        public function showProperty() {
          foreach ($this as $key => $value) {
            print "{$key} : {$value} <br />";
          }
        }
      }


      //反復処理のカスタマイズ
      class FriendList implements IteratorAggregate {
        //ダミーのプロパティを定義
        public $version = '1.0.0';
        public $name = '友人リスト';
        //Personオブジェクトのリストを格納するためのPrivate変数
        private $list = [];

        //反復処理の対象を定義
        public function getIterator() {
          return new ArrayIterator($this->list);
        }
        // Personオブジェクトを追加するためのaddメソッド
        public function add(Person $p) {
          $this->list[] = $p;
        }
        // 指定されたインデックス番号に対応するPersonオブジェクトを取得
        public function __invoke($index) {
          return $this->list[$index];
        }
      }



      //マジックメソッド
      //未定義のプロパティを処理する - __get, __set
      class MyMail {
        // to (宛先), subject (件名), message (本文)プロパティを定義
        public $to;
        public $subject;
        public $message;

        //その他のヘッダ情報を格納するためのプライベート変数 (連想配列)
        private $headers = [];

        //未定義のプロパティを設定すると、$headerにその値をセット

        public function __set($name, $value) {
          $this->headers[$name] = $value;
        }

        //未設定のプロパティを取得しようとすると、$headerから該当する値を取得
        public function __get($name) {
          return $this->headers[$name];
        }

        //プロパティ情報を基にメールを送信
        public function send() {
          // $headersの内容を基にヘッダ情報(改行区切り)を生成
          foreach ($this->headers as $key => $value) {
            //プロパティ名に含まれる「_」は「-」に変換
            $key = str_replace('_', '-', $key);
            $others = "{$key}: {$value}\n";
          }
          //メールを送信
          mb_send_mail($this->to, $this->subject, $this->message, $others);
        }
      }


      ?>
    </body>
  </html>
