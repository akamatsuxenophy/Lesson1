var elements = document.getElementsByTagName('li');

for(var i = 0; i < elements.length; i++) {
  //ドラッグ開始時にdataTransferにデータをセットする
  elements[i].ondragstart = function(e) {
    //テキストデータをセット
    e.dataTransfer.setData('text/plain', e.target.textContent);
    //HTMLデータをセット
    e.dataTransfer.setData('text/html', e.target.outerHTML);
    //URLデータをセット
    e.dataTransfer.setData('text/uri-list', document.location.href);
  };
}

// //ドラッグオーバー中の要素にクラスを追加
// element.ondragenter = function(event) {
//   //エフェクトの追加
//   element.classList.add('dragover');
// };
// element.ondragleave = function(event) {
//   //エフェクトの削除
//   element.classList.remove('dragover');
// };
// element.ondrop = function(event) {
//   //エフェクトの削除
//   element.classList.remove('dragover');
// };
//


//ドラッグ操作によるファイルの取得
// element.ondragover = function(event) {
//   //ドロップを有効にする
//   event.preventDefault();
// };
//
// element.ondrop = function(event) {
//   if(event.dataTransfer.files.length) {
//     alert('ファイルがドラッグされました');
//
//     //1つ目のfileオブジェクトを取得
//     var file = event.dataTransfer.files[0];
//     console.log(file);
//   } else {
//     alert('ファイル以外がドラッグされました');
//   }
//
//   //ブラウザがファイルを展開しようとするのを防ぐ
//   event.preventDefault();
// }
//
//
// //テキストファイルの読み込み
// var reader = new FileReader();
// reader.readAsText(file);
//
// //読み込みが成功したら、読み込み結果をアラート表示する
// reader.onload = function(event) {
//   var textData = reader.result; //もしくはevent.target.result
//   alert(textData);
// };


// //ファイル読み込みエラー補足例
// reader.onerror = function() {
//   if(reader.error.code === reader.error.NOT_READABLE_ERR) {
//     alert('ファイルの読み込み権利がありません');
//   } else if(reader.error.code === reader.error.ABORT_ERR) {
//     alert('ファイルの読み込みを中止しました');
//   } else {
//     alert('ファイルの読み込みに失敗しました');
//   }
// };
//
//
// //sliceメソッドの利用例
// //読み込み開始位置
// var lastPos = 0;
//
// function getDiff(file) {
//   //前回読み込んだ位置より後ろの部分を切り出す
//   var blob = file.slice(lastPos, file.size);
//
//   //今回読み込んだ位置を保存する
//   lastPos = file.size;
//
//   //切り出し部分を読み込む
//   var reader = new FileReader();
//   reader.onload = function(){/* do something */};
//   reader.readAsText(blob);
// }
//
//
//
// //URLの生成例
// document.location = 'data:text/html,' + data;
//
// //HTMLデータの生成(Base64エンコードを利用)
// var data = btoa('<h1>Hello, World!</h1>');
// document.location = 'data:text/html;base64,' + data;
//
//
// //readAsDataURLメソッドの利用例
// document.body.ondragover = function(event) {
//   // dropを有効にする
//   event.preventDefault();
// };
//
// document.body.ondrop = function(event) {
//   event.preventDefault();
//
//   //ドラッグされたファイルのFileオブジェクトを取得
//   var file = event.dataTransfer.file[0];
//
//   //ドラッグされたファイルをdata URL形式で読み込む
//   var reader = new FileReader();
//   reader.readAsDataURL(file);
//
//   reader.onload = function() {
//     //data URLを取得
//     var dataURL = reader.result;
//
//     //data URLをハオ系に設定
//     document.body.style.background = 'url('+ dataURL +')';
//
//     //data URLをlocationStorageに保存
//     localStorage.background = dataURL;
//   }
// }
//
// window.onload = function() {
//   if(localStorage.backgroud) {
//     document.body.style.backgroud = 'url('+ localStorage.backgroud +')';
//   }
// };
//
//
// //ファイルの同期読み込み例
// self.onmessage = function(event) {
//   var file = event.data;
//   var reader = new FileReaderSync();
//   var data = reader.readAsText(file);
//
//   /*do something*/
// };
