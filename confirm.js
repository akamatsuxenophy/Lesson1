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
    seibetsu = arg.seibetsu;
    juu = arg.juu
    nijuu = arg.nijuu
    sanjuu = arg.sanjuu
    yonjuu = arg.yonjuu

// テキストを変更
document.getElementById('username').innerText = name;
document.getElementById('useraddress').innerText = address;
document.getElementById('useremail').innerText = email;
document.getElementById('usertel').innerText = tel;

//性別の分岐とテキスト変更
var target = document.getElementById("usersex");

 if (seibetsu == "otoko") {
      target.innerHTML = "男性";
    }else if (seibetsu == "onna") {
      target.innerHTML = "女性";
    }else {
      target.innerHTML = "未入力";
    }


    //年齢の分岐とテキスト変更
 var targeta = document.getElementById("userage");
    if (juu == "true") {
        targeta.innerHTML += "１０代";
      }
    if (nijuu == "true") {
        targeta.innerHTML += "２０代";
      }
    if (sanjuu == "true") {
        targeta.innerHTML += "３０代";
      }
    if (yonjuu == "true") {
        targeta.innerHTML += "４０代";
      }

// debugger;

console.log(name);
console.log(tel);
