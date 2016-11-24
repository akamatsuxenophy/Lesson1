//WebSocket
  //ポーリングの実装例
//   setInterval(function() {
//     var xhr = new XMRHttpRequest();
//     xhr.onreadystatechange = function() {
//       if(xhr.readyState == 4 && xhr.status == 200) {
//         var res = JSON.parse(xhr.responseText);
//         //更新があったらアクションを実行
//         if(res.serverStateChanged) {
//           /*do something*/
//         }
//       }
//     };
//     xhr.open('GET', 'http://www.foo.org/checkServerState');
//     xhr.send();
//   }, 100);
//
//
//   //Comet-ロングポーリングの実装例
//   function comet() {
//     var xhr = new XMRHttpRequest();
//     xhr.onreadystatechange  function() {
//       if(xhr.readyState == 4) {
//
//         //サーバーからのプッシュ通知
//         if(xhr.status == 200) {
//           /*do something*/
//         }
//
//         //コネクションの再接続
//         connect();
//       }
//     };
//     xhr.open('GET', 'http://www.foo.org/comet');
//     xhr.send();
//
//   }
//
//
// //基本操作
//
//   var ws  new WebSocket('ws://www.foo.org:8888/bar', 'subprotocol');
//
//
//   //コネクション確立時のイベントハンドラ
//   ws.onopen = function(event) {
//     /* do something */
//   };
//
//
//   //サーバーにメッセージを送信
//   ws.send('Hello, WebSocket!');
//
//   //サーバーからのメッセージを受信
//   ws.onmessage = function(event) {
//     //受信データを取り出す
//     var receivedMessage = event.data;
//
//     /* something */
//   };
//
//
//   //任意のJavaScriptオブジェクトを送受信
//   var obj = {x: 1, y: 2};
//
//   //JavaScriptオブジェクトをJSON文字列に変換して送信
//   ws.send(JSON.stringify(obj));
//
//   ws.onmessage = function(event) {
//     //受信したJSON文字列をJavaScriptオブジェクトに変換
//     var receivedObject = JSON.parse(event.data);
//
//     /* do something */
//   };
//
//
//   //コネクションの切断
//   ws.close();
//
//   ws.onclose = function(event) {
//     /* do something */
//   };
//
//
//   //コネクションの再接続
//   //WebSocketインスタンスを格納する変数
//   var ws = null;
//
//   //WebSocketの初期化
//   function initWebSocket() {
//     ws = new WebSocket('ws://www.foo.org/bar');
//     ws.onopen = function() {/* do something */};
//     ws.onmessage = function() {/* do something */};
//     //コネクション切断の10秒後に再接続を試みる
//     ws.onclose = function() {setTimeout(initWebSocket, 10000); };
//   }
//
//
//   //Blobを指定して送信
//   ws.send(blob);
//
//   //ArrayBufferを指定して送信
//   ws.send(arrayBuffer);
//
//
//   //バイナリデータの受信
//   //受信バイナリデータの受信フォーマットを指定
//   ws.binaryType = 'blob';
//
//   ws.onmessage = function(event) {
//     var receivedData = event.data;
//     if(receivedData.constructor === Blob) {
//       //バイナリデータ受信
//     } else {
//       //テキストデータ受信
//     }
//   };
//

  // WebSocketサーバの実装例
  //WebSocket-serverを利用する
  var ws = require('websocket-server');

  //WebSocketサーバの生成
  var server = ws.createServer();

  //接続イベントを補足
  server.addListener('connection', function(socket) {
    //ログを表示する
    console.log('onconnection:', socket);

    //メッセージ受信イベントを補足
    socket.addListener('message', function(data) {
      //接続中のすべての人に受信メッセージをそのままブロードキャスト
      server.broadcast(data);
    });
  });

  //ポート8888番でアクセスを受け付ける
  server.listen(8888);
  console.log('waiting...');
