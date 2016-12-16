//文、式、演算子


  //リテラル表記ex.
  var foo = "bar";

  //数値リテラル表記ex.
  var val0 = 0;

  //変数宣言ex.
  var foo;
  var foo, bar; //複数の変数宣言
  var foo = 'FOO', bar = 'BAR'; //宣言と同時に初期化


  var a;
  a == 0; //式文(結果的に何もしない)

  //式文ex.
  var s;
  s = 'foo';  //代入式の式文
  print(s); //関数呼び出しの式文

  //if-else文ex.
  if(i == 0) {
    print('if clause');
  } else {
    print('else clause');
  }


  //入れ子のif-else文
  if(i == 0) {
    if(j == 0) {
      print("i == 0 and j == 0");
    } else {
      print("i == 0 and j!= 0");
    }
  } else {
    print("i!= 0");
  }


  //紛らわしいインデント
  if(i == 0){
    if(j == 0){
      print("i == 0 and j == 0");
    }
  } else {
    print("i == 0 and j!= 0");
  }


//switch-case文


  var s = 'foo';

  switch(s) { //switch式に文字列値も書けます
    //switch式の値と異なる型の値をcase式に書けます
    //s == 0が偽なので次に行きます
    case:
      print('not here');
      break;

    //case式に変数を使う式を書けます
    //s == slengthが偽なので次に行きます
    case s.length:
      print('not here');
      break;

    //case式にメゾット呼び出し式を書けます
    //s == (0).toSring()が偽なので次に行きます
    case (0).toString():
      print('not here');
      break;

    //s == 'f' + 'o' + 'o'が真なので以下を実行します
    case 'f' + 'o' + 'o':
      print('not here');
      break;

    //もしすべてのcase式で偽になれば、以下を実行します
    default:
      print('not here');
      break;
  }


  var x = 0;
  switch(x) {
    case 0:
      print('0');
    case 1:
      print('1');
    case 2:
      print('2');
    default:
      print("default");
      break;
  }


  var x = o;
  awitch(x) {
    case 0:
      print("0");
      break;
    case 1;
      print("1");
      break;
    case 2;
      print("2");
      break;
    default:
      print("default");
      break;
  }



//while文

  while(flag){
    print("in loop1");  //一文でもブロック文にする方がいい
  }


  //入れ子のwhile文
  while(flag){
    while(flag2){
      print("in loop");
    }
  }


  //while文の中のif文
  while(flag){
    if(flag2){
      print("in loop");
    }
  }


  //10回ループ
  var  = 0;
  while (i < 10){
    print(i);
    i++;
  }

  //10回ループ(2)
  var doing = true;
  var i =0
  while(doing){
    print(i);
    i++;
    if(i ==10) {
      doing = false;
    }
  }



//do-while文
  do{
    print("in loop");
  }while(flag);


  //ex.
  function printNumberFormRight(n) {
    do{
      print(n % 10);
      n = ~~(n / 10);
    } while(n > 0);
  }



//for文
  for (var i = 0; i < 10; i++) {
    print(i);
  }

  for (var i = 0; i <10; i++) {
    print(i);
  }

  //1から始まるパターン
  for (var i = 1; i <10; i++) {
    print(i);
  }


  //複数ループ変数の例
  for (var i = 0, j = 0; i <10 && j < 10; i++, j++) {
    print(i);
  }


  var obj = {x: 1, y: 3, z: 2};
  for(var k in obj) {
    prit(k);
  }
  //結果
  x y z


  var obj = {x: 1, y: 3, z: 2};
  for(var k in obj) {
    prit(obj[k]);
  }
  //結果
  1 2 3


  var arr = {7, 1, 5};
  for(var n in arr) {
    prit(n + '=>' + arr[n]);
  }
  //結果
  0=>7 1=>1 2=>5



//for each文
  var obj = {x:1, y:3, z:2};
    for each(var v in obj) {
      print(v);
  }


//break文
  var flag_loop = true;
  while(flag_loop) {
    //省略
    if(抜ける条件){
      break;
    }
  }


  //continue文
  for(var i = 0; i < 10; i++) {
    if(i % 2 != 0){
      continue;
    }
  }


//ラベルを使ったジャンプ
  while(条件) {
    print("outer loop");
    while(条件) {
      print("inner loop");
      if(抜ける条件) {
        break;
      }
    }
  }


  var flag_loop = true;
  while(flag_loop) {
    print("outer loop");
    while(条件) {
      print("inner loop");
      if(抜ける条件){
        flag_loop = false;
        break;
      }
    }
  }


  outer_loop:
  while(true) {
    print("outer loop");
    while(true) {
      print("inner loop");
      break outer_loop;
    }
  }


//try文


  try {
    print('1');
    null.x;
    print('not here');
  } catch(e) {
    print('2');
  } finaly {
    print('3');
  }


//with文


  var x = 1;
  var obj = {x:7, y:8};
  with(obj) {
    print(x);
  }
  7


//その他


  1 + 2*3;  //2*3が優先


  1 + 2 + 3//は
  (1 + 2)+ 3//と見なされる

  'x' * 0;
  NaN
  +'x';
  NaN


  var n = 10;
  var m = ++n;
  print(m, n);
  11 11

  var n = 10;
  var m = n++;
  print(m, n);
  10 11


  '100' > '99'  //文字列的には’９’＞’１’なのでfalse
  false

  '100' > 99  //この場合は数値に変換されるのでtrue
  true


  //数値に変換するとNaN
  1 >'x':
  false
  1 =< 'x';
  false

  //undefind値からの型変換
  undefind > 0;
  false
  undefind =< 0;
  false
  undefind > undefind;
  false

  true < false; //数値に変換されて1 > 0
  true
  true > 0;
  true

  null < 1; //nullが0に変換
  true
  null > 1;
  false

  var obj = {};
  obj >0;
  false
  obj <= 0;
  false

  obj.value = function(){return 1;}
  obj > 0;
  true


  var n = 0 && 1;
  print(n);
  0

  var n = true && 1;
  print(n);
  1


  var n = 1 || 2;
  print(n);
  1
  var = false || 'x';
  print(n);
  x

  x=y=z=0;

  if(x = y){};

  x =y;
  if(y){};//動くけど間違い

  if(x == y){};//正しくは


//void演算子


  print(void 0);
  undefind
  print(void x);
  undefind

  var x = 0;
  void x++:
  print(x);
  1

  void(x);  //これが一番いい
