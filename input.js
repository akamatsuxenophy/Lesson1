console.log('input.js');

// TODO インデントは再度見直し///
// TODO チェックボックスの値はclassで配列で取得して判定する///
// TODO document.getElementsByName('age')で取得した配列をループさせてチェックする（性別も同様）///
// TODO 性別の値を数値で扱うように対応///
// TODO 変数名に見直し///
// TODO 文末にはセミコロン、全体見直し///
// TODO エラーメッセージはまとめて一回でアラート表示///
// TODO return でチェック結果（true/false）で返すようにして判断する。（関数の呼び出しもとでハンドリング）///



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
      //sex = sex + ",";
      //sex = sex + seibetsu[i].value;
      sex = seibetsu[i].value;
      break;
    }
  }

  //チェックボックスの値定義ー年齢
  var age = "",
      tmpAge = [];
  for (var i = 0; i < ages.length; i++) {
    if (ages[i].checked) {
      // age = age + ",";
      // age = age + ages[i].value;
      tmpAge.push(ages[i].value);
    }
  }
  age = tmpAge.join(',');
  console.log(age);

  //エラーメッセージの値
  var wd = ""

  // チェック結果を格納する配列
  var res = [];

  //名前の確認
  res.push(requireCheck(name));
  res.push(lengthCheck(name,10));

　//住所の確認
　res.push(requireCheck(address));
　res.push(lengthCheck(address,30));

  //チェック項目の確認
　res.push(requireCheck(sex));
　res.push(requireCheck(age));

  //メールの確認
  res.push(requireCheck(email));
  res.push(typeAlphaNumCheck(email , /[^A-Za-z0-9\@.-/]+/));

  //電話番号の確認]
  res.push(requireCheck(tel , "電話番号"));
  res.push(typeAlphaNumCheck(tel , /[^0-9]+/));
  console.log(res);

　//true・falseの確認
  for(var i = 0; i < res.length; i++){
   if(res[i] === false){
     alert("入力に誤りがあります。" +  wd);
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
function requireCheck(target) {
  // 必須項目のチェック
  if (target === "") {
    return false;
    wd = + "入力してない項目があります。";
  } else {
    return true;
  }
}

function lengthCheck(target,x) {
  // 数値チェック
  var tv = target;
    if(tv.length > x){
      return false;
    } else {
      return true;
    }
}

function typeAlphaNumCheck(target, x) {
  // 半角英数値チェック
  if (target.match( x )) {
    return false;
  } else {
    return true;
  }
}
