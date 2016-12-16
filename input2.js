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

  var ages = document.getElementsByName('age');
  var seibetsu = document.getElementsByName('seibetsu');

  //URLを生成する
  var sendUrl = baseUrl + "?name=" + name + "&address=" + address + "&email=" + email + "&tel=" + tel + "&otoko=" + otoko + "&onna=" + onna + "&juu=" + juu + "&nijuu=" + nijuu + "&sanjuu=" + sanjuu + "&yonjuu=" + yonjuu;
  console.log(sendUrl);


//入力内容の確認
  var flag = 0;


　　 //名前
//   	if(name == ""){
//       alert( "名前を10文字以内で入力してください。" );
//       flag = 1;
//     }
//
//     if(name.length > 10){
//       alert( "名前を10文字以内で入力してください。" );
//       flag = 1;
//     }
//
//
//     //住所
//     if(address == ""){
//       alert( "住所を30文字以内で入力してください。" );
//       flag = 1;
//     }
//
//     if(address.length > 30){
//       alert( "住所を30文字以内で入力してください。" );
//       flag = 1;
//     }
//
//
// 　　//年齢
//     var str="";
//
//       for( i=0; i<ages.length; i++ )
//       {
//
//       if( ages[i].checked ){
//           if( str != "" ) str=str+",";
//
//           str=str+ages[i].value;
//         }
//       }
//
//       if( str=="" ){
//          alert( "年齢を選択してください。" );
//          flag = 1;
//        }
//
//       //性別
//          var stra="";
//
//
//            for( i=0; i<seibetsu.length; i++ )
//            {
//
//              if( seibetsu[i].checked )
//              {
//
//                if( stra != "" ) stra=stra+",";
//
//
//                stra=stra+seibetsu[i].value;
//              }
//            }
//
//            if( stra=="" ){
//               alert( "性別を選択してください。" );
//               flag = 1;
//             }
//
//
//
//    //メールアドレス
//     if(email == ""){
//       alert( "メールアドレスを入力してください。" );
//       flag = 1;
//     }
//
//     if(email. match ( /[^A-Za-z0-9\@.-/]+/ )){
//       alert( "メールアドレスは半角英数で入力してください。" );
//       flag = 1;
//     }
//
//
// 　　 //電話番号
//     if(tel == ""){
//       alert( "電話番号を入力してください。" );
//       flag = 1;
//     }
//
//     if(tel. match(/[^0-9]+/)){
//       alert( "電話番号は半角数字で入力してください。" );
//       flag = 1;
//
//     }
//
//
//     // 設定終了
//     if(flag){
//   		return false; // 送信を中止
//     }
//
//
//   //URLを決める
  // location.href = sendUrl;
//
//

function sum(a, b) {
  return a + b;
}

function requireCheck(target , x) {
  // 必須項目のチェック
  if (target === "") {
      alert( x + "を入力してください。" );

    }
    flag = 1;
}


  requireCheck(name , "名前")
  requireCheck(address , "住所")
  requireCheck(email , "メールアドレス")
  requireCheck(tel , "電話番号")




// function typeNumberCheck(target,x) {
//   // 数値チェック
//       if(pt.length > x){
//         alert( "名前を" + x + "文字以内で入力してください。" );
//         flag = 1;
//       }
//     }
//
//     typeNumberCheck(name,10)
//     typeNumberCheck(address,30)
//

function typeAlphaNumCheck(target , x , y) {
  // 半角英数値チェック
      if(tel. match( x )){
        alert( y + "で入力してください。" );
        flag = 1;
      }
    }

    typeAlphaNumCheck(email , /[^A-Za-z0-9\@.-/]+/ , "メールアドレスは半角英数")
    typeAlphaNumCheck(tel , /[^0-9]+/ , "電話番号は半角数字")

function lengthCheck() {
  // ケタ数チェック
}



    // 設定終了
    if(flag){
  		return false; // 送信を中止
    }


location.href = sendUrl;


}
