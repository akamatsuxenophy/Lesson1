console.log('input.js');

// TODO インデントは再度見直し

function btnClick() {

  var result = true;

  var baseUrl = 'http://localhost/lesson1/confirm.html';

  // 入力データを取得する
  var name = document.getElementById('name').value;

  // 住所を取得
  var address = document.getElementById('address').value;

  // メアド取得
  var email = document.getElementById('email').value;

　//電話番号取得//
  var tel = document.getElementById('tel').value;

  //性別男か//
  var otoko = document.getElementById('otoko').checked;
  //性別女か//
  var onna = document.getElementById('onna').checked;

  // TODO チェックボックスの値はclassで配列で取得して判定する
  // TODO document.getElementsByName('age')で取得した配列をループさせてチェックする（性別も同様）

  //１０代か
  var juu = document.getElementById('juu').checked;
　//２０代か
  var nijuu = document.getElementById('nijuu').checked;
　//３０代か
  var sanjuu = document.getElementById('sanjuu').checked;
　//４０代か
  var yonjuu = document.getElementById('yonjuu').checked;

  var age = document.getElementsByName('age');
  var seibetsu = document.getElementsByName('seibetsu');

  // TODO 性別の値を数値で扱うように対応
  //ラジオボタンの値定義
  if (otoko == true) {
      seibetsu = "otoko";
    } else if (onna == true) {
      seibetsu = "onna";
    } else {
      seibetsu = "not"
  }

  // TODO 変数名に見直し
  //チェックボックスの値定義
  var ages = "";
  for (var i = 0; i < age.length; i++) {
    if (age[i].checked) {
      ages != "";
      ages = ages + ",";
      ages = ages + age[i].value;
    }
  }

  //URLを生成する
  var sendUrl = baseUrl + "?name=" + name + "&address=" + address + "&email=" + email + "&tel=" + tel + "&seibetsu=" + seibetsu + "&ages=" + ages;
  console.log(sendUrl);

  //入力内容の確認
  var flag = 0;

  // TODO 文末にはセミコロン、全体見直し
  // TODO エラーメッセージはまとめて一回でアラート表示
  //名前の確認
  var res = requireCheck(name , "名前");//入力確認
  if (res) {

  } else {

  }
  lengthCheck(name,10);//文字数確認

　//住所の確認
  requireCheck(address , "住所")//入力確認
  lengthCheck(address,30)//文字数確認

  //チェック項目の確認
  boxCheck(seibetsu , "性別" , "not")//性別入力確認
  boxCheck(ages , "年齢" , "")//年齢入力確認

  //メールの確認
  requireCheck(email , "メールアドレス")//入力確認
  typeAlphaNumCheck(email , /[^A-Za-z0-9\@.-/]+/ , "メールアドレスは半角英数")

  //電話番号の確認
  requireCheck(tel , "電話番号")//入力確認
  typeAlphaNumCheck(tel , /[^0-9]+/ , "電話番号は半角数字")

  // 設定終了
  if(flag){
    return false; // 送信を中止
  }

  //URLを決める
  location.href = sendUrl;
}

// TODO return でチェック結果（true/false）で返すようにして判断する。（関数の呼び出しもとでハンドリング）他のチェック処理も同様
//入力項目のチェック
function requireCheck(target , x) {
  // 必須項目のチェック
  if (target === "") {
    alert( x + "を入力してください。" );
    return false;
    // flag = 1;
  }
  return true;

}

function boxCheck(target , x , y) {
  // 必須項目のチェック
  if (target === y) {
    alert( x + "を入力してください。" );
    flag = 1;
  }
}

function lengthCheck(target,x) {
  // 数値チェック
  var pt = target

    if(pt.length > x){
      alert( "名前を" + x + "文字以内で入力してください。" );
      flag = 1;
    }
}

function typeAlphaNumCheck(target, x , y ) {

  // 半角英数値チェック
  if (target. match( x )) {
    alert( y + "で入力してください。" );
    flag = 1;
  }

}
