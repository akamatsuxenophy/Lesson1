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

  //アラートの表示変数
  var wr = "";
  var wl = "";
  var wt = "";

  // チェック結果を格納する配列
  var res = [];
  var errMsg = '';
  var errMsg2 = [];

  //名前の確認

  var res1 = requireCheck(name , "名前", );
  if (!res1) {
    errMsg = name + "が入力されていません。\n";
  }
  res.push(res1);


  res.push(requireCheck(name , "名前"));
  res.push(lengthCheck(name , 10 , "名前"));
　//住所の確認
　res.push(requireCheck(address , "住所"));
　res.push(lengthCheck(address, 30 , "住所"));
  //チェック項目の確認
　res.push(requireCheck(sex , "性別"));
　res.push(requireCheck(age , "性別"));
  //メールの確認
  res.push(requireCheck(email , "メールアドレス"));
  res.push(typeAlphaNumCheck(email , /[^A-Za-z0-9\@.-/]+/ , "メールアドレス" , "半角英数"));
  //電話番号の確認]
  res.push(requireCheck(tel , "電話番号"));
  res.push(typeAlphaNumCheck(tel , /[^0-9]+/ , "電話番号" , "半角数字"));
  console.log(res);

　//true・falseの確認
  for(var i = 0; i < res.length; i++){
   if(res[i] === false){
     alert(wr + wl + wt);
     return false;
   }
  }

  //URLを生成する
  var sendUrl = baseUrl + "?name=" + name + "&address=" + address + "&email=" + email + "&tel=" + tel + "&age=" + age + "&sex=" + sex;
  console.log(sendUrl);

  //URLを決める
  location.href = sendUrl;
}

//入力項目のチェック
function requireCheck(target , x) {

  var hoge = '';

  // 必須項目のチェック
  if (target === "") {
    // wr = x + "が入力されていません。\n";
    return false;
  } else {
    return true;
  }
}

function lengthCheck(target,x , y) {
  // 数値チェック
  var tv = target;
  if(tv.length > x){
    wl += y + "は" + x + "以内で入力してください。\n";
    return false;
    } else {
      return true;
    }
}

function typeAlphaNumCheck(target, x , y , z) {
  // 半角英数値チェック
  if (target.match( x )) {
    wt += y + "は" + z + "で入力してください。\n";
    return false;
  } else {
    return true;
  }
}
