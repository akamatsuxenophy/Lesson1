console.log('input.js');
function btnClick() {

  var result = true;
  //遷移のurl
  var baseUrl = 'http://localhost/lesson1/confirm.html';
  // 入力データを取得する
  var name = document.getElementById('name').value;
  // 住所を取得
  var address = document.getElementById('address').value;
  // メアド取得
  var email = document.getElementById('email').value;
　//電話番号取得
  var tel = document.getElementById('tel').value;
  //年齢取得
  var ages = document.getElementsByName('age');
  //性別取得
  var seibetsu = document.getElementsByName('seibetsu');

  //チェックボックスの値定義ー性別
　var sex = "";
　for (var i = 0; i < seibetsu.length; i++) {
    if (seibetsu[i].checked) {
      sex = seibetsu[i].value;
      break;
    }
  }

  //チェックボックスの値定義ー年齢
  var age = "",
      tmpAge = [];
  for (var i = 0; i < ages.length; i++) {
    if (ages[i].checked) {
      tmpAge.push(ages[i].value);
    }
  }
  age = tmpAge.join(',');
  console.log(age);

  // チェック結果を格納する配列
  var res = [];
  var errMsg = '';
  // var errMsg2 = [];

  //名前の確認

  var isValid = true;

  var res1 = requireCheck(name);
  var res2 = lengthCheck(name , 10);

  var res3 = requireCheck(address);
  var res4 = lengthCheck(address , 30);

  var res5 = requireCheck(sex);
  var res6 = requireCheck(age);

  var res7 = requireCheck(email);
  var res8 = typeAlphaNumCheck(email , /[^A-Za-z0-9\@.-/]+/);

  var res9 = requireCheck(tel);
  var res10 = typeAlphaNumCheck(tel , /[^0-9]+/);


  res.push(res1);
  res.push(res2);
  res.push(res3);
  res.push(res4);
  res.push(res5);
  res.push(res6);
  res.push(res7);
  res.push(res8);
  res.push(res9);
  res.push(res10);


  if (!res1) {
    isValid = false;
    errMsg = errMsg + "名前が入力されていません。\n";
  }
  if (!res2) {
    isValid = false;
    errMsg = errMsg + "名前は10文字以内で入力して下さい。\n";
  }
  if (!res3) {
    isValid = false;
    errMsg = errMsg + "住所が入力されていません。\n";
  }
  if (!res4) {
    isValid = false;
    errMsg = errMsg + "住所は30文字以内で入力して下さい。\n";
  }
  if (!res5) {
    isValid = false;
    errMsg = errMsg + "性別が選択されていません。\n";
  }
  if (!res6) {
    isValid = false;
    errMsg = errMsg + "年齢が選択されていません。\n";
  }
  if (!res7) {
    isValid = false;
    errMsg = errMsg + "メールアドレスが入力されていません。\n";
  }
  if (!res8) {
    isValid = false;
    errMsg = errMsg + "メールアドレスは半角英数で入力して下さい。\n";
  }
  if (!res9) {
    isValid = false;
    errMsg = errMsg + "電話番号を入力して下さい。\n";
  }
  if (!res10) {
    isValid = false;
    errMsg = errMsg + "電話番号は半角数字で入力して下さい。\n";
  }
  if (!isValid) {
  alert(errMsg);
  return;
  }

  //URLを生成する
  var sendUrl = baseUrl + "?name=" + name + "&address=" + address + "&email=" + email + "&tel=" + tel + "&age=" + age + "&sex=" + sex;
  console.log(sendUrl);
  console.log(errMsg);

  //URLを決める
  location.href = sendUrl;
}

//入力項目のチェック
function requireCheck(target , x) {
  // 必須項目のチェック
  if (target === "") {
    return false;
  } else {
    return true;
  }
}

function lengthCheck(target,x , y) {
  // 数値チェック
  var tv = target;
  if(tv.length > x){
    return false;
    } else {
      return true;
    }
}

function typeAlphaNumCheck(target, x , y , z) {
  // 半角英数値チェック
  if (target.match( x )) {
    return false;
  } else {
    return true;
  }
}
