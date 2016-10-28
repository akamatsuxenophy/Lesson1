//JSの型

//文字列型
  var s = "abc"; //変数sに文字列値を代入
  print(s); //変数sの値を表示
  abc

  var s = 'abc'; //変数sに文字列値を代入
  print(s); //変数sの値を代入
  abc


  var s = 'I say "yes"'; //"文字にエスケープ文字は不要(エスケープしてもOK)
  print(s);
  I say "yes"


  var s = 'abc'; //文字列'abc'を代入
  var s2 = s; //変数sの値をs2に代入
  print(s2); //変数s2の値は文字列値'abc'
  abc


  var a1 = '012';
  var s2 = '345';
  var s3 = s1 + s2; //文字列の連結
  print(s3); //変数s3の値は文字列値'012345'
  012345


  var s = '012';
  s += '345';
  print(s); //変数sの値は文字列値'012345'
  012345


  var s = '012';
  var s2 = s ;
  s += '345'; //変数sの値は文字列値'012345'
  print(s2); //変数s2の値は文字列値'012'のまま
  012


  typeof 'abc'; //文字列リテラルに対するtypepf演算
  string

  var s = 'abc';
  typeof s; //変数sの値に対するtypeof演算
  string
  typeof(s); //カッコがあってもいい
  string
  stringtypepf(typeof(s)); //typeof演算の結果は文字列値
  string


  var s1 = '012';
  var s2 = '0';
  var s3 = s2 + '12';
  s1 == s3; //文字列の中身が一緒
  true
  s1 === s3; //文字列の中身が一緒
  true
  s1 != s3;
  false
  s1 !== s3;
  false


  var s1 = 'abc';
  var s2 = 'def';
  s1 < s2;
  true
  s1 =< s2;
  true
  s1 > s2;
  false
  s1 =< s2;
  false


  var  s = "012";
  s.length;//形式上、文字列値のプロパティアクセスに見える
  3
  '012'.length;//形式上、文字列リテラル値のプロパティアィセスに見える
  3


  var sobj = new String('abc'); //文字列オブジェクト作成


  var s =sobj + 'def'; //文字列オブジェクトから文字列値への暗黙の型変換
  print(s);
  abcd


  var sobj1 = new String('abc');
  var sobj2 = new String('abc');
  sobj1 == sobj2; //文字列の内容が同じでも参照先オブジェクトが異なるので
  false
  sobj1 + '' === sobj2; //文字列の内容が同じでも参照先のオブジェクトが異なるので
  false

  sobj1 + '' == sobj2 + '';
  true
  sobj1 + '' === sobj2 + '';
  true


  var sobj = new String('abc');
  var s = 'abc';
  sobj == s; //型変換をする同値演算はtrue
  true
  sobj === s; //型変換をしない同値演算はfalse
  false


  var sobj = new String('abc');
  typeof sobj;
  object


   var s ='abc'://文字列値のインデックス１の位置の文字を返す
   b
   'abc'.charAt(1); //文字列リテラルにもメゾットも呼び出し可能
   b


   var s = String('abc');
   typeof s; //変数sの値は文字列値
   string

   var s = String(47); //数値から文字列値への明示的な型変換
   print(s);

   typeof s; //変数sの値は文字列型
   string


   var s = new String('abc');

   print(s[1]); //インデックス１の文字
   b
   print('abc'[2])  //暗黙の型変換で文字列に対しても呼べる
   c


   var s = new String('abc');

   var s2 = s.toUpperCase(); //オブジェクトsのtoUpperCaseメゾット呼び出し
   print(s, s2); //オブジェクトsの内容は不要
   abc abc

   s[0] = 'A'; //javascript独自拡張の[]演算でも内容は書き換えられない
   print(s);
   abc


//数値化ーあまり理解できず

  var n1 = 1; //変数n1に数値１を代入
  var n2 = 2; //変数n2に数値２を代入
  n1 + n2;
  3


  var n = 1;
  typeof n; //数値に対するtypeof演算
  number

  typeof 1; //数値リテラルに対するtypeof演算
  number


  (1).toString(); //小数点とドット演算子を区別するためにカッコが必要
  1

  typeof(1).toString(); //数値から文字列への変換になっていることを確認
  string


  var nobj = new Number(1);
  var nobj1 = new Number(1);
  nobj == nobj1; //値が同じでも参照先オブジェクトが異なるのでfalse
  false
  nobj === nobj1; //値が同じでも参照先が異なるのでfalse
  false

  nobj = 1; //型変換をする同値演算はtrue
  nobj === 1; //型変換をしない演算同値はfalse
  false


  var nobj = new Number(1);
  typeof nobj;
  object


  var n1 = number(1);
  typeof n1; //変数n1の値は数値
  number
  n1 == 1;
  true
  n1 === 1;
  true

  var n = Number('1'); //文字列値から数値への明示的な型変換
  print(n)
  1


  var n = number('x');
  print(n);
  NaN
  typeof n;
  number

  var nobj = new Number('x');
  print(nobj);
  NaN
  typeof nobj;
  object


  Number.MAX_VALUE;
  1.678909871234567890
  Number.MIN_VALUE;
  5e-324;
  -Number.MAX_VALUE;
  -1.7345634958625672
  -Number.MIN_VALUE;
  -1.78129034729017


  Number.POSITIVE_INFINITY;
  infinity

  Number.NEGATIVE_INFINITY;
  infinity

  Number.NaN;
  NaN


  var inf = Number.MAX_VALUE * 2;
  print(inf); //最大整数を２倍すると正の無限大
  infinity

  inf / 2; //2で割っても元に戻らない
  infinity

  inf * 0;
  NaN


  NaN + 1;
  NaN
  NaN + 0;
  NaN
  NaN - NaN;
  NaN


  NaN == 1;
  false
  NaN === 1;
  false
  NaN == NaN;
  false
  NaN >= NaN;
  false


  isNaN(NaN);
  true

  var nanobj = new Number(NaN);
  typeof nanobj;
  objectisNaN(nanobj);
  true

  isNaN({});
  true


  isFinite(1);
  true
  isFinite(NaN);
  false
  isFinite(infinity);
  false
  isFinite(-infinity);
  false


  //ECMAScript第５版での動作
  NaN = 7;
  print(NaN);
  NaN

  Infinity = 8;
  print(Infinity);
  Infinity



//ブーリアン型


  var flag = true;
  print(flag);
  true
  print(!flag);
  false
  print(!!flag);
  true

  typeof true;
  boolean
  typeof false;
  boolean

  true.toString();
  true


  var t = new Boolean(true); //コンストラクタ呼び出し
  t;
  truetypeof t;　//ブーリアンオブジェクト呼び出し
  object
  t == true; //型変換をする同値演算はtrue
  true
  t == = true;  //型変換をしない同値変換はfalse
  false


  var tval = Boolean(true);
  typeof tval;
  Boolean
  tval;
  true
  tval == true;
  true
  tval ===true;
  true



//null型

  typeof null;  //typeofの結果は'object'
  object

  null.toString();
  TypeError: null has no properties;  //typeofの結果は'undefind'文字列値
  undefind


  undefind = 'abc';
  print(undefind);
  undefind


  var u;  //宣言しただけの変数
  typeof u; //変数の値はundefind値
  undefind


  undefind.toString();
  TypeError: undefind has no properties


//オブジェクト型


  var obj = {}; //空のオブジェクト
  typeof obj;
  "object"

  function f() {};  //空の関数
  typeof f;
  "function"


  typeof Number('100');
  number
  Number('100x');
  NaN
  parseInt('100');
  NaN
  parseInt('100x');
  100
  parseInt('x');
  NaN
  parseInt('ff', 16);
  255
  parseInt('Oxff', 16);
  255
  parseInt('ff', 10);
  NaN
  parseInt('0.1');
  0
  parseFloat('0.1');
  0.1


  '100' - 1;
  99
  '100' - '1';
  99
  '100' - '';
  100


  '100' + '1';
  1001
  1 + '100';
  1100


  typeof + '100';
  number
  var s = '100';
  typeof + s;
  number


  typeof String(100);
  string
  typeof (100).toString;
  string

  var n = 100;
  String(n);
  100.toString();
  100


  'foo' + 100;
  foo100
  100 + 'foo';
  100foo

  var n = 100;
  'foo' + n;
  foo100


  //型変化のイディオム

  //数値から文字列値
  var n = 3;
  n + ''; //数値３から文字列値'3'への型変換(文字列連結演算子を利用)

  //文字列値から数値
  var s = '3';
  + s;  //文字列値'3'から数値3への型変換(正の符号演算を利用)


  if (0) {
    print('T');
  }else{
    print('F');
  }
  f


  !!1;
  true
  !!'x';
  true
  !!0;
  false
  !!'';
  false
  !!null;
  false


  var b = new Boolean(false);
  if(b) {
    print('T');
  } else {
    print('F');
  }
  T


  var z = new Number(0);
  if(z) {
    print('T');
  } else {
    print('F');
  }

  var s = new String('');
  if(s) {
    print('T');
  } else {
    print('F');
  }
  F


  var b = Boolean(false);
  if(b) {
    print('T');
  } else {
    print('F');
  }
  F

  var z = Number(0);
  if(z) {
    print('T');
  } else {
    print('F');
  }
  F

  var = String('');
  if(s) {
    print('T');
  } else {
    print('F');
  }
  F


  var obj = {};  //空のオブジェクト
  obj + ''; //文字列型への暗黙の型変換 (文字列連結演算子を利用)
  [object Object]
  String(obj);
  [object Object]


  obj.toString(); //現在のtoStringメゾットの結果を確認
  [object object] //上記の結果に合致

  obj.toString = function() { //toStringメゾットの実装を書き換える
    return 'MyObj';
  }
  obj.toString);  //toStringのメゾット結果を確認
  MyObj

  obj + '';
  MyObj
  Object(obj);
  MyObj


  var obj = {};
  obj++;  //数値型への暗黙の型変換が起きている
  obj;  //変数objの値はNaN
  NaN
