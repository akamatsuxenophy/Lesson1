console.log('confirm.js');
// URLパラメータの取得
var arg = new Object;
var pair = location.search.substring(1).split('&');
for (var i = 0; i < pair.length; i++) {
 var kv = pair[i].split('=');
 arg[kv[0]]=kv[1];
}


// HTMLにパラメータの値を埋め込み
var name = arg.name,
    address = arg.address;
    email = arg.email;
    tel = arg.tel;
    sex = arg.sex;
    age = arg.age;

// テキストを変更
document.getElementById('username').innerText = name;
document.getElementById('useraddress').innerText = address;
document.getElementById('useremail').innerText = email;
document.getElementById('usertel').innerText = tel;

//性別の分岐とテキスト変更
var target = document.getElementById("usersex");

if (sex == "1") {
  target.innerHTML = "男性";
}else if (sex == "2") {
  target.innerHTML = "女性";
}else {
  target.innerHTML = "未入力";
}

    //年齢の分岐とテキスト変更
var targeta = document.getElementById("userage");
if (~age .indexOf('10')) {
  targeta.innerHTML += "１０代 ";
}
if (~age .indexOf('20')) {
  targeta.innerHTML += "２０代 ";
}
if (~age .indexOf('30')) {
  targeta.innerHTML += "３０代 ";
}
if (~age .indexOf('40')) {
  targeta.innerHTML += "４０代 ";
}
