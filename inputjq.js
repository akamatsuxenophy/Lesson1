console.log('input.js');
$('.button').on('click', function(e){

  var result = true;
  //遷移のurl
  var baseUrl = 'http://localhost/lesson1/confirmjq.html';


  // 入力データを取得する
  //名前を取得
  var name = $('#name').val();
  // 住所を取得
  var address = $('#address').val();
  // メアド取得
  var email = $('#email').val();
　//電話番号取得
  var tel = $('#tel').val();
  //性別取得
  var sex = $(':radio[name="seibetsu"]:checked').val();
  //年齢取得
  var age= [];//配列にして格納
  $('[name="age"]:checked').each(function(){
    age.push($(this).val());
  });

  // チェック結果を格納する配列
  var res = [];
  //アラート文章格納
  var errMsg = '';
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

  if (errMsg.length !== 0) {

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
});


//入力項目のチェック
function requireCheck(target) {
  // 必須項目のチェック
  if(target === "" ||target === undefined || target.length === 0) {
    return false;
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
  if(target.match( x )) {
    return false;
  } else {
    return true;
  }
}
