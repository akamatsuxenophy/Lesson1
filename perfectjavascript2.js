//JSの言語

var s = 'foobar'; //説明のためのコメント
続行結果(あるいは式の評価結果)

x;
typein:1: ReferenceError: x is not defind


//WEbブラウザ
var print = alert;

var print = dedocumennt,write;

//fireafaBugやNode.js利用
var print = console.log;


//変数の基礎
  var foo; //変数fooを宣言

  foo = "abc"; //変数fooに文字列値"abc"を代入

  var foo ="abc"; //文字列値"abc"を持つ変数fooを宣言

  //↓これは悪い例
  var foo;
  foo = "abc"; //変数fooに文字列値"abc"を代入
  foo = "123"; //変数fooに文字列値"123"を代入


  var n = 7; //変数nに数値７を代入
  n + 1; = 8; //変数nの値を取り出し、１を加算


  var foo;
  print(foo); //変数fooの値はunfined値
  unfined


  print(x);
  ReferenceError: x is not defined

  const FOO = 7; //定数名は大文字の方がわかりやすくていい
  foo = 8; //定数に再代入
  print(FOO); //値は変わらない(再代入はエラーにならない)
  7


  const FOO;
  print(FOO); //宣言時に代入しないと定数の値はunfinedになる
  unfined


//関数の基礎
  print("1");
  function f(){ //関数宣言
    print("2");
  }

  print("3");
  f(); //関数呼び出し


  //関数宣言文の文法
  function 関数名(引数, 引数, .....){
    関数本体
  }

  //ex.
  function sum(a, b){ //カッコ内の値は仮定引数
    return Number(a) + Number(b);
  }

  //関数sumの呼び出し
  sum(3, 4);
  7


  //関数リテラル式の文法
  function(引数, 引数, ...) {
    関数本体
  }
  function 関数名(引数, 引数) { //関数宣言文
    関数本体
  }
  //ex.
  var sum2 = function(a, b){
    return Number(a) + Number(b);
  }

  //関数sum2の呼び出し
  sum2(3, 4);
  7

  //リスト2.2の関数名を代入しきの右辺に記述
  var sum3 = sum;
  //関数sum3の呼び出し
  sum3(3, 4);
  7


//オブジェクトの基礎
  //オブジェクトリテラル式の文法
  {プロパティ名：プロパティ値, プロパティ名, プロパティ値, ...}

  //ex.
  {x: 2, y: 1} //プロパティ名が識別子
  {"x": 2, "y": 1} //プロパティ名が文字列値
  {'x': 2, 'y': 1} //プロパティ名が文字列値
  {1: 2, 2:1} //プロパティ名が数値
  {x: 2, y: 1, enable: true, color: {r: 255, g: 255, b: 255} }
  //様々な形のプロパティ

  {x: 2, y: 1, } //ECMAScript第５版は最後のカンマを無視する

  //オブジェクトリテラル式と代入式
  var obj = {x: 3, y: 4,}; //生成そたオブジェクトの参照を変数objに代入
  type obj; //typeof演算子で型を判定するとobject
  object

  print(obj.x); //オブジェクトobjのプロパティxの値を表示
  3

  var ob2 = {pos: (x: 3, y: 4) };
  print(obj2.pos.x);
  3

  obj.x = 33; //既存のプロパティ値の上書き
  print(obj.z);
  5

  obj = 5; //新規プロパティ
  print(obj.z);
  5

  print(obj['x']); //obj.xと同じ
  3

  var name = 'x';
  print(obj[name]);　//obj.xと同じ
  3

  obj['z'] = 5; //プロパティzに数値5を代入(プロパティzが存在しなければ新規追加)

  obj.fn(3, 4); //関数呼び出し
  7

  obj.fn2 = sum; //sumはリストで2.2で定義した関数
  obj.fn2(3, 4); //関数呼び出し
  7

  //new式
  var obj - new Object();
  typeof obj; //typeof演算子で型を判定するとobject
  object


//配列の基礎
  //配列リテラルの例
  var arr = [1, 100, 7];

  print(arr[1]); //インデックス値１の要素の読み出し
  100
  arr[1] = 200; //インデックス値１の要素の書き込み
  print(arr[1]);
  200

  var n = 1;
  print(arr[n]); //arr[1]と同じ
  200
  print(arr[n + 1]); //arr[2]と同じ
  7


  //異なる要素型の配列リテラルの例
  var arr = [1, 'foo', 7];
