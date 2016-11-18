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
