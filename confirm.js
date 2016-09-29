console.log('confirm.js');
// 　function unload(){
//     var pram=location.search;
//     document.write("JavaScriptはONです。");
//     document.write("<img src='../images/img002.gif'>");
// document.close();
// }

// URLパラメータの取得
var arg = new Object;
var pair = location.search.substring(1).split('&');
for (var i = 0; i < pair.length; i++) {
  var kv = pair[i].split('=');
  arg[kv[0]]=kv[1];
}

// HTMLにパラメータの値を埋め込み
var name = arg.name,
    tel = arg.tel;

// 名前のテキストを変更
// hoge.text = name;
debugger;
document.getElementById('username').innerText = name;

console.log(name);
console.log(tel);
