
//マウスポインタの発火
function onclick(event) {
  //eventオブジェクトからマウスポインタの位置を取得して処理をする
}


//要素内での相対座標を求める
function onclick(event) {
  var x = event.clientX;   //ウィンドウ座標系でのマウスポインタのX座標
  var y = event.clientY;   //ウィンドウ座標系でのマウスポインタのY座標
  var r = event.target.getBoundingClientRect();  //ウィンドウ座標系でのクリックした要素の領域情報
  x -= r.left;   //クリックした要素内でのマウスポインタのX座標
  y -= r.top;  //クリックした要素内でのマウスポインタのYの座標
}



//クロスブラウザXMLHttpReqest
if(!window.XMLHttpRequest) {
  //Internet Explorer 6
  XMLHttpRequest = function() {
    var obj = ['MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP','Microsoft.XMLHTTP'];
    for(var i = 0; i < objs.length; i++) {
      var obj = objs[i];
      try {
        return new ACtiveXObject(obj);
      } catch(ignore) {
      }
    }
    throw new Error('Cannot create XMLHttpRequest object.');
  }
}
var xhr = new XMLHttpRequest();



//リクエストを送信する
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4) {
    if(xhr.status == 200) {
      alert(xhr.responseText);
    }
  }
};
xhr.open('GET', 'http://example.com/something');
xhr.setRequestHeader('if-Modified-Since', 'Thu, 01, jun, 1970, 00:00:00 GMT');
xhr.send(null);



//XMLHttpRequestによる同期通信
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/something', false);  //第三引数にfalseを指定して同期通信する
xhr.setRequestHeader('if-Modified-Since', 'Thu, 01 jun 1970 00:00:00 GMT');
//ここに来る時はレスポンス受信は完了している
if(xhr.status === 200) {
  alert(xhr.responseText);
}
=



//タイムアウト処理
var xhr = new XMLHttpRequest();
var timeId = window.setTimeout(function() {
  xhr.abort();
}, 5000);  //5秒でタイムアウトさせる

xhr.onreadystatechange = function() {
  if(request.readyState === 4) {
    //タイムアウト処理をキャンセルする
    window.clearTimeout(timerId);
  }
};



//レスポンス
//汎用的なレスポンス
var xhr = XMLHttpRequest();
//.....
var dom = document.getElementById('foo');
foo.innerHTML = xhr.responseText;



//XMLによるレスポンス
var xhr = XMLHttpRequest();
//...
var xml = xhr.responseXML;

//xmlの中身はこのようになってるとする
//<result>
//  <apiversion>1.0</apiversion>
//  <value>foo</value>
// </result>
alert(xml.getElementsByTagName('value')[0].firstChild.nodeValue);  // => foo



var xhr = XMLHttpRequest();
//...
var json = JSON.parse(xhr.responseText);

//jsonの中身はこうなっているとする
//{
//  "apiversion": 1.0,
//  "value": "foo"
//}
alert(json.value);   // => foo



//JSONP
callback({
  "foo": "This is foo",
  "bar": "This is bar",
  "baz": "This is baz"
});


//ex.
function foo(json) {
  //jsonデータを使って何かやる
}

function loadData() {
  var elem = document.createElemnt('script');
  // callback関数としてfooを指定する
  //JSONPを利用したAPIではcallback関数の名前を指定できることが多い
  elem.src = 'http://api.example.com/some-data&callback = foo';
  //scriptタグをheadに追加する
  //この時DOMが再構築され、scriptタグのsrcの内容がロードされる
  //ロードされるとfoo関数が実行される
  document.getElementsByTagName('head')[0].appendChild(elem);
}


var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://other.example.com', true);
xhr.withCredentials = true;  //Cookieを送るように指定
xhr.onreadystatechange = function() {
  //何らかの処理
};
xhr.send();
