//DOM



  //DOMの基礎

  var global_variable = 'Global Variable';
  alert(window.global_variable === global_variable);  // => true


//ノードの選択


  var element = document.getElementById('foo');


  //タグ名による検索
  var spanElements = document.getElementsByTagName('span'); // span要素だけを取得する
  var allaaelements = document.getElementsByTagName('*'); // すべての要素を取得する

  //getElementsByTagName()の返り値
  var nodeList = document.getElementsByTagName('span');
  alert(nodeList instanceof NodeList);  // => true
  alert(nodeList instanceof Array); // => false
  var array = Array.prototype.slice.call(nodeList); //NodeListオブジェクトを
                                                    //Arrayオブジェクトに変換する
  alert(array instanceof NodeList);  // => false
  alert(array instanceof Array);  // => true


  //Internet ExplorerでのgetElementsByTagName()
  var htmlCollection = document.getElementsByTagName('span');
  alert(htmlCollection instanceof HTMLCollection);  // =>true
  alert(htmlCollection instanceof NodeList);  // =>false


  //Insternet ExplorerでのgetElementsByTagName()
  alert(htmlCollection instanceof Array); // =>false
  var array = new Array(htmlCollection.length);
  for (var i = 0, len = htmlCollection.length; i < len; i++) {
    array[i] = htmlCollection[i];
  }



  //イテレータとスナップショットの違い
  //イテレータの取得
  var iterator = document.evaluate(
    '//div[@id="main"]/p',
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  //イテレータを取得した後に条件にマッチするノードを文章に追加する
  var newParagraph = document.createElement('p');
  document.getElementById('main').appendChild(newParagraph);
  newParagraph.appendChild(document.createTextNode('This is a new paragraph.'));
  try {
    node = iterator.iterateNext();  //INVALID_STATE_ERRという例外が発生する
  } catch(e) {
    console.log(e);
  }

  //スナップショットを取得
  var snapshot = document.evaluate(
    '//div[@id="main"]/p',
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  //スナップショットを取得した後に条件にマッチするノードを文章に追加する
  var anotherParagraph = document.createElement('p');
  document.getElementById('main').appendChild(anotherParagraph);
  newParagraph.appendChild(document.createTextNode('This is anotherParagraph.'));
  for (var i = 0; i < snapshot.snapshotLength; i++) {
    console.log(snapshot.snapshotItem(i) === anotherParagraph);
    //すべてfalseになる
    //つまりanotherParagraphはsnapshotに含まれてない
    //例外も発生しない
  }


  //Selector APIの使用例
  var a = document.querySelector('#foo');
  var b = document.getElementById('foo');
  alert(a === b); // => true
  var c = document.querySelectorAll('div');
  var d = document.getElementsByTagName('div');
  alert(c[0] === d[0]); // => true



  //ノードの作成・追加
  var elem = document.createElement('div'); //div要素を作成
  var text = document.createTextNode('This is s new div slement.'); //テキストノードを作成
  document.body.appendChild(elem);  // body 直下に作成したdiv要素を追加
  elem.appendChild(text); //作成したdiv要素にテキストノードを追加
  var comment.body.insertBefor(comment, elem);  //elemの前にコメントノードを挿入


  //ノードの置換
  var newNode = document.createElemnt('div');
  var oldNode = document.getElementById('foo');
  var parentNode = oldNode.parentNode;
  prentNode.replaceChild(newNode, oldNode);


  //ノードの削除
  var elem = document.getElementById('foo');


  //inerHTML / textContent
  var elem = document.getElementById('foo');
  elem.innerHTML = '<div>This is a new div element.</div>';


  //DOM操作のパフォーマンス

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 10; i++) {
    var child = document.createElemnt('div');
    // DocumentFragmentに対して子要素を追加する
    fragment.appendChild(child);
  }
  //親要素にDocumentFragmentを追加する
  // DocumentFragmentを追加しているが、実際に追加されるのはDocumentFragmentの子要素だけ
  document.getElementById('parent').appendChild(fragment);
