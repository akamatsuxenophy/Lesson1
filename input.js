console.log('input.js');
function btnClick(){

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

  //１０代か
  var juu = document.getElementById('juu').checked;
　//２０代か
  var nijuu = document.getElementById('nijuu').checked;
　//３０代か
  var sanjuu = document.getElementById('sanjuu').checked;
　//４０代か
  var yonjuu = document.getElementById('yonjuu').checked;

  var ages = document.getElementsByName('age')
  var seibetsu = document.getElementsByName('seibetsu')

  //URLを生成する
  var sendUrl = baseUrl + "?name=" + name + "&address=" + address + "&email=" + email + "&tel=" + tel + "&otoko=" + otoko + "&onna=" + onna + "&juu=" + juu + "&nijuu=" + nijuu + "&sanjuu=" + sanjuu + "&yonjuu=" + yonjuu;
  console.log(sendUrl);



  var flag = 0;


　　 //名前
  	if(name == ""){
      flag = 1;
    }

    else if(name.length > 10){
      flag = 1;
    }


    //住所
    else if(address == ""){
      flag = 1;
    }

    else if(address.length > 30){
      flag = 1;
    }

    for(var i=0;i<ages.check.length;i++){
      if(ages.check[i].checked == true){
        var hoge = ages.checked[i].value;
      alert(hoge+"が選択されています");
      }
	 }


for(var i=0;i<seibetsu.radio.length;i++){
            if(seibetsu.radio[i].checked == true){
              var hogeb = seibetsu.radio[i].value;
              alert(hogeb +"が選択されています");
  }
}


   //メールアドレス
    else if(email == ""){
      flag = 1;
    }

    else if(email.match ( /[^0-9a-zA-Z_]+@+\.+/ )){ // 「メール」文字をチェック
      flag = 1;
    }


　　 //電話番号
    else if(tel == ""){ // 「電話番号」の入力をチェック
      flag = 1;
    }

    else if(tel. match(/[^0-9]+/)){ // 「電話番号」の文字をチェック
      flag = 1;
    }


    // 設定終了
    if(flag){

  		window.alert('必須項目に未入力がありました'); // 入力漏れがあれば警告ダイアログを表示
  		return false; // 送信を中止

  	}
  	else{

  		return true; // 送信を実行

  	}


  //URLを決める
  location.href = sendUrl;
}
