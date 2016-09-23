console.log('input.js');
function btnClick(){

  // 入力データを取得する
  var name = document.getElementById('name').value;

  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?name=' + name;
  console.log(url);


  var address = document.getElementById('address').value;
  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?address=' + address;
  console.log(url);


  var email = document.getElementById('email').value;
  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?email=' + email;
  console.log(url);


  var tel = document.getElementById('tel').value;
  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?tel=' + tel;
  console.log(url);

  var otoko = document.getElementById('otoko').checked;
  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?otoko=' + otoko;
  console.log(url);

  var onna = document.getElementById('onna').checked;
  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?onna=' + onna;
  console.log(url);

  var juu = document.getElementById('juu').checked;
  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?juu=' + juu;
  console.log(url);

  var nijuu = document.getElementById('nijuu').checked;
  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?nijuu=' + nijuu;
  console.log(url);

  var sanjuu = document.getElementById('sanjuu').checked;
  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?sanjuu=' + sanjuu;
  console.log(url);

  var yonjuu = document.getElementById('yonjuu').checked;
  var baseUrl = 'http://localhost/confirm.html';
  var url = baseUrl + '?yonjuu=' + yonjuu;
  console.log(url);



  //URLを生成する
  var sendUrl = "http://localhost/confirm.html?name=value&address=value&email=value&tel=value&otoko=checked&onna=checked&juu=checked&nijuu=checked&sanjuu=checked&yonjuu=checked";


  location.href = sendUrl;

}
