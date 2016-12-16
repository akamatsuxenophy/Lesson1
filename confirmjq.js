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

//性別の分岐とテキスト変更
if (sex === "1") {
  sex = "男性";
}else if (sex === "2") {
  asex = "女性";
}else {
  sex = "未入力";
}

//年齢の分岐とテキスト変更
var allAge = "";

if (~age .indexOf('1')) {
  allAge += "１０代 ";
}
if (~age .indexOf('2')) {
  allAge += "２０代 ";
}
if (~age .indexOf('3')) {
  allAge += "３０代 ";
}
if (~age .indexOf('4')) {
  allAge += "４０代 ";
}

// テキストを変更
$('#username').text(name);
$('#useraddress').text(address);
$('#useremail').text(email);
$('#usertel').text(tel);
$('#usersex').text(sex);
$('#userage').text(allAge);
