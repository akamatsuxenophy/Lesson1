console.log('input.js');
function btnClick(){

  var baseUrl = 'http://localhost/lesson1/confirm.html';

  // 入力データを取得する
  var name = document.getElementById('name').value;


  // var url = baseUrl + '?name=' + name;
  // console.log(url);

  // 住所を取得
  var address = document.getElementById('address').value;
  // var baseUrl = 'http://localhost/confirm.html';
  // var url = baseUrl + '?address=' + address;
  // console.log(url);

  // メアド取得
  var email = document.getElementById('email').value;
  // var baseUrl = 'http://localhost/confirm.html';
  // var url = baseUrl + '?email=' + email;
  // console.log(url);

　//電話番号取得//
  var tel = document.getElementById('tel').value;
  // var baseUrl = 'http://localhost/confirm.html';
  // var url = baseUrl + '?tel=' + tel;
  // console.log(url);
  //性別男か//
  var otoko = document.getElementById('otoko').checked;
  // var baseUrl = 'http://localhost/confirm.html';
  // var url = baseUrl + '?otoko=' + otoko;
  // console.log(url);
  //性別女か//
  var onna = document.getElementById('onna').checked;
  // var baseUrl = 'http://localhost/confirm.html';
  // var url = baseUrl + '?onna=' + onna;
  // console.log(url);
  //年齢１０代か//
  var juu = document.getElementById('juu').checked;
  // var baseUrl = 'http://localhost/confirm.html';
  // var url = baseUrl + '?juu=' + juu;
  // console.log(url);

  var nijuu = document.getElementById('nijuu').chdecked;
  // var baseUrl = 'http://localhost/confirm.html';
  // var url = baseUrl + '?nijuu=' + nijuu;
  // console.log(url);

  var sanjuu = document.getElementById('sanjuu').checked;
  // var baseUrl = 'http://localhost/confirm.html';
  // var url = baseUrl + '?sanjuu=' + sanjuu;
  // console.log(url);

  var yonjuu = document.getElementById('yonjuu').checked;
  // var baseUrl = 'http://localhost/confirm.html';
  // var url = baseUrl + '?yonjuu=' + yonjuu;
  // console.log(url);



  //URLを生成する
  var sendUrl = baseUrl + "?name=" + name + "&address=" + address + "&email=" + email + "&tel=" + tel + "&otoko=" + otoko + "&onna=" + onna + "&juu=" + juu + "&nijuu=" + nijuu + "&sanjuu=" + sanjuu + "&yonjuu=" + yonjuu;
  console.log(sendUrl);



  location.href = sendUrl;

}
