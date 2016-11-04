//変数とオブジェクト

//変数の宣言
  var a = 7;
  print(a);
  7
  var a;  //同じ変数をもう一度宣言しても
  print(a); //値はそのまま
  7


  var a = 123;  //変数aに数値123を代入
  var b = a ; //変数bに変数aの値(数値123)を代入

  b++;  //b値をインクリメント
  print(b);
  124
  print(a); //aの値は変わらない
  123


  var a = {x:1, y:2}; //変数aにオブジェクトの参照を代入
  var b = a;  //変数bに変数aの値(オブジェクトの参照)を代入

  b.x++; //変数bの参照先オブジェクトを変更
  print(b.x);  //変数bの参照先オブジェクト
  2
  print(a.x); //変数aの参照先オブジェクトで変更が見える
  2


  var a = {x:1, y:2}; //変数aと変数bが同じオブジェクトを参照
  var b = a;  //変数aの値を変更(別のオブジェクトを参照)
  a = {x:2, y:2}; //変数bの参照先オブジェクトは変わらない
  1


  //二つの引数の値を交換できない関数
  function no_swap(a, b){
    var tmp = a;
    a = b;
    b = tmp;
  }


  //リスト5.1の実行結果
  var one = 1;
  var = zero = 0;
  no_swap(one, zero);
  print(one, zero);  //変数oneとzeroの値は変わってない
  1 0


  //リスト5.2の実行結果
  [one, zero] = swap(one, zero);
  print(one, zero);
  0 1


//変数とプロパティ

  var x = 'foo';  //グローバル変数xに値を代入
  print(this.x);  //this.xでアクセス可能
  foo

  function fn() {}; //グローバル関数。関数の中身はどうでもいいので空にします
  'fn' in this; //グローバルオブジェクトのプロパティfn
  true


  var global = this;  //グローバル変数globalにthis参照を代入
  'global' in this; //グローバルオブジェクトのプロパティglobal
  true


//変数の存在とチェック
  var a = a || 7; //イディオムの１種。変数aが既に値を持っていれば変数aの値を使う

  //値を変数aが既に値を持っていれば変数aの値を使うコード例①
  var a;
  var b= a || 7;


  //変数aが既に値を持っていれば変数aの値を使うコード②
  var a;
  var b = a !== undefind ? a : 7;


  //変数aが既に値を持っていれば変数aの値を使うコード例③
  //(var a不要バージョン)
  if(typeof a !== 'undefined') {
    var b = a;
  } else {
    var b =7;
  }
  //ここで変数bを使える


  //変数aが宣言済みか否かを判定するコード
  if('a' in this) {
    var b = a;
  } else {
    var =7;
  }
  //ここで変数bを使える


  print(x); //宣言していない変数へのアクセスはreferenceErrorエラー
  referenceError: x is not definedp
  rint(this.x); //存在しないプロパティへのアクセスは特にエラーは起きない
  undefined

  var obj = {};
  print(obj.x); //存在しないプロパティを読むとundefined値が返るだけでエラーは起きない
  undefined


  print(obj.x.y);
  TypeError: obj.x is undefined


//オブジェクトとは

  //複数の引数を受け取る関数
  function getDistance(x, y, z) {
    return Math.sqrt(x * x + y * y + z * z);
  }
  //ex.
  getDistance(3, 2, 2);


  function getDistance(pos) {
    return Math.sqrt(pos.x * pos.x + pos.y * pos.y + pos.z * pos.z);
  }
  //ex.
    getDistance({x:3, y:2, z:2});
  }


  function getDistance(pos){
    pos = pos || {x:0, y:0, z:0}; //引数posがなければデフォルト値を使う
    return Math.sqrt(pos.x + pos.y * ps.y + pos.z * pos.z);
  }

  function fn() {
    //省略
    return {x:3, y:2, z:2};
  }

  //ex.
  var pos = fn();
  print(pos.x, pos.y, pos.z);
  3 2 2


  //オブジェクトを意図した関数
  function createObject(){
    return {x:3, y:2, z:2,
      getDistance: function(){
        return Math.sqrt(this.x * this.x + his.y * this.y + this.z + this.z);
      }
    };
  }

  //ex.
  var obj = createObject();
  print(obj.getDistance());
  4.123105617661


  function f(){
    return [3, 4, 5];
  }

  var x, y, z;
  [x, y, z] = f();
  print(x, y, z);
  3 4 5


  //コンストラクタ(クラスの定義)
  function MyClass(x, y){
    this.x = x;
    this.y = y;
  }

  //リスト5.8のコンストラクタの呼び出し
  var obj = new MyClass(3, 2);
  print(obj.x, obj.y);
  3 2


  //クラス定義もどき(改善の余地あり)
  function MyClass(x, y){
    //フィールド相当
    this.x = x;
    this.y;
    //メゾット相当
    this.show = function(){
      print(this.x, this.y);
    }
  }

  //ex.
  var obj = new MyClass(3, 2);
  obj.show();
  3 2


//プロパティのアクセス

  var obj = {x:3, y:4};
  print(obj.x); //プロパティx
  3
  print(['x']); //プロパティx
  3
  var key = 'x';
  print(obj[key]) //プロパティx(プロパティkeyではない)
  3


  var key = 'x';
  var obj = {key: 3}; //プロパティkey(プロパティxではない)
  var obj = {'x': 3}; //プロパティx


  ({x: 3, y: 4}).x; //プロパティx
  3
  ({x: 3, y:4})['x']; //プロパティx
  3


  //ハイフン文字を含むプロパティ名
  obj = {'foo-bar': 5};

  obj.foo-bar;  //obj.fooとbarの減算と解釈されてエラー
  ReferenceError: bar is not defined

  obj['foo-bar']; //[]演算を使い文字列値で指定すると動作
  5


  var key = 'x';
  obj[key]; //プロパティx(プロパティkeyではない)


  //数値から整数部分のみ取り出す処理
  Math[this < 0 ? 'ceiling' : 'foor'](this)


  var obj = {x:3, y:4, z:5};
  for(var key in obj){
    print('key =', key);  //プロパティ名の列挙
    print('val =', obj[key]); //プロパティ名の列挙
  }
  //実行結果
  key = x
  val = 3
  key = y
  val = 4
  key = z
  val = 5


  //連想配列の要素の削除の例(プロパティの削除)

  var map = {x:3, y:4};
  print(map.x);
  3
  delete map.x; //delete map['x’]でも可能
  true  //削除に成功するとtrueが返る
  print(map.x); //削除した要素を含むとundefined値が返る
  undefined

  function MyClass(){}
  MyClass.prototype.z = 5;  //プロトタイプチェーン上にプロパティzをセット

  var obj = new MyClass();
  print(obj.z); //プロパティzをプロトタイプ継承している

  for(var key in obj){print(key);}  //for in文はプロトタイプ継承したプロパティも列挙する
  z

  delete obj.z; //deleteできていないがt流絵は返る
  true
  print(obj.z); //プロトタイプ継承したプロパティはdeleteできない
  5


  var map = {}; //空のオブジェクトリテラルで生成した連想配列
  'toString' in map;  //toStringプロパティをObjectクラスからプロトタイプを継承している
  true

  for(var key in map){
    print(key);
  }
  //何も列挙されない


  var map = {};
  map.hasOwnProperty('tostring'); //toStringは直後のプロパティではないのでfalse
  false

  map['toString'] = 1;
  map.hasOwnProperty('toString');
  true

  delete map['toString'];
  map.hasOwnProperty('toString');
  false


  var obj = {x:2, y:3};
  object.seal(obj);

  //プロパティ追加はできない
  obj.z = 4;
  Object.keys(obj);
  ["x", "y"]

  //プロパティ削除は可能
  delete obj.y;
  object.keys(obj);
  ["x"]

  //プロパティの変更は可能
  obj.x = 20;
  print(obj.x);
  20


  var obj = {x:2, y:3};
  Object.freeze(obj);

  //プロパティ値変更できない
  obj.x = 20;
  print(obj.x);
  2


//オブジェクト定義
  var obj = {
              x: 3,
              doit: function() {print('method is called.' + this.x);}
            };
  obj.doit(); //オブジェクトobjがレシーバーオブジェクト。doitがメゾッド
  method is called.3

  obj['doit']();  //オブジェクトobjがレシーバーオブジェクト。doitがメゾッド
  method is called.3


  var obj = {
              x: 3,
              doit: function() {print('method is called.' + this.x);}
            };

  obj.doit(); //オブジェクトobjレシーバーオブジェクト。doitがメゾッド
  method is called. 3

  obj.['doit'](); //オブジェクトobjがレシーバーオブジェクト。doitがメゾッド
  method is called. 3


  var obj = {
              x: 3,
              doit: function() {print('method is called' + this.x);}
            };

  var fn = obj.doit;  //obj.doitが参照する関数オブジェクトをグローバル変数fnに代入

  fn(); //関数内のthis参照はグローバルオブジェクトを参照する
  method is called. undefined

  var x = 5;  //this参照がグローバルオブジェクトを参照していることを確認
  fn();
  method is called. 5

  var obj2 = {x: 4, doit2: fn}; //別のオブジェクトobj2のプロパティにobjのメゾッド(関数オブジェクトの参照)を代入
  obj2.doit2(); //メゾッド内のthis参照はオブジェクトobj2を参照する
  method is called. 4


  //doitメゾッド内からdoit2メゾッドを呼ぶ時、this.doit2()のようにthis参照経由が必要
  var obj = {
              x: 3,
              doit: function() {print('doit is called.' + this.x); this.doit2();},
              doit2: function() {print('doit2 is called.' + this.x);}
            };

  obj.doit();
  doit is called. 3
  doit2 is called. 3


  function f() {print(this.x);}
  var obj = {x: 4};

  f.apply(obj); //関数fをapplyで呼び出す。関数内のthis参照はオブジェクトobjを参照
  4
  f.call(obj);  //関数fをcallで呼び出す。関数内のthis参照はオブジェクトobjを参照
  4

  //別オブジェクトをレシーバーオブジェクトにしてメゾッドを呼び出す
  var obj = {
              x: 3,
              doit: function() {print('method is called.' + this.x);}
            };


  var obj2 = {x: 4};
  obj.doit.apply(obj2); //メゾッドobj.doitをapplyで呼び出す。メゾッド内のthis参照はオブジェクトobj2を参照
  method is called. 4


  function f(a, b) {print('this.x = ' + this.x + ', a =' + a + 'b =' +b);}

  f.apply({x: 4}, [1, 2]);  //第2引数の配列要素が関数fの引数になる
  this.x = 4, a = 1, b = 2

  f.call({x: 4}, 1, 2); //第2引数以降の引数が関数fの引数になる
  this.x = 4, a = 1, b = 2


//プロトタイプ継承

  //クラス定義相当
  function MyClass(x, y) {
    this.x = x;
    this.y = y;
  }
  MyClass.prototype.show = function() {
                                        print(this.x, this.y);
                                      }
  //ex.
  var obj = new MyClass(3, 2);
  //メゾッド呼び出し
  obj.show();
  3 2


  function MyClass() {this.x = 'x in MyClass';}

  var obj = new MyClass();  //Myclassコンストラクタでオブジェクト生成
  print(obj.x); //オブジェクトobjのプロパティxにアクセス
  x in MyClass

  print(obj.z);
  undefined

  //関数オブジェクトは暗黙にprototypeプロパティを持つ
  MyClass.prototype.z = 'z in MyClass.prototype';
  //コンストラクタのprototypeオブジェクトにプロパティzを追加
  print(obj.z); //obj.zはコンストラクタのprototypeオブジェクトのプロパティにアクセス
  z in MyClass.prototype  //obj.zはコンストラクタのprototypeオブジェクトのプロパティにアクセス


  function MyClass() {this.x = 'x in MyClass'}
  MyClass.prototype.y = 'y in MyClass.prototype';

  var obj = new MyClass();  //MyClassコンストラクタでオブジェクト生成
  print(obj.y); //プロトタイプチェーンでプロパティyの読み取り
  y in MyClass.prototype

  obj.y = 'override'; //オブジェクトobjに直接プロパティに追加
  print(obj.y); //直接プロパティを組む
  'override'

  var obj2 = new MyClass();
  printZ(obj2.y); //別オブジェクトから見えるプロパティyは変わっていない
  y in MyClass.prototype


  delete obj.y; //プロパティを削除

  print(obj.y); //直接のプロパティがなくなるとプロトタイプチェーンをたどる
  y in MyClass.prototype
  delete obj.y; //delete演算の評価値はtrueだが...
  true
  print(obj.y); //プロトタイプチェーン先のプロパティはdeleteできない
  y in MyClass.prototype


  obj.toString(); //オブジェクトobjに対してtoStringメゾッドを呼べることの確認
  [object object]

  obj.hasOwnProperty('toString'); //オブジェクトobjにtoStringメゾッドは存在しない
  false
  Object.prototype.hasOwnProperty('toString');  //ObjectにtoStringメゾッドが存在しないことに注意
  false


  //プロトタイプオブジェクトの取得方法
  //前提
  function MyClass() {}
  var Proto = MyClass.prototype;
  var obj = new MyClass();  //オブジェクトobjのプロトタイプオブジェクトはオブジェクトprototype

  //インスタンスオブジェクトから取得(ECMAScript第５版の正攻法)
  var Proto = Object.getPrototypeOf(obj);

  //インスタンスオブジェクトから取得(独自拡張の_proto_プロパティ利用)
  var Proto = obj._proto_;

  //インスタンスオブジェクトからコンストラクタを経由した取得(常に使える保証はない)
  var Proto = obj.constructor.prototype;


//オブジェクトの型

  var d = new Date();
  d.constructor;  //オブジェクトのdのconstructorプロパティはDateを参照
  function Date() {
    [native code]
  }

  var arr = [1, 2, 3];
  arr.constructor;  //オブジェクトarrのconstructorプロパティはArray参照
  function Array() {
    [native code]
  }

  var obj = {};
  obj.constructor;  //リテラルで生成したオブジェクトのconstructorプロパティはObjectを参照
  function Object() {
    [native code]
  }


  function Derived() {} //派生クラス相当のコンストラクタ
  function Derived() {} //基底クラス相当のコンストラクタ
  Drived.prototype = new Base();

  var obj = new Derived();  //Derivedコンストラクタでオブジェクトobj生成
  obj.constructor;  //オブジェクトobjのconstructorプロパティはBaseを参照
  function Base() {
  }


  Derived.prototype.constructor = Derived;

  obj.constructor;  //オブジェクトobjのconstructorプロパティはDerivedを参照
  function Derived() {
  }


  var d = new Date(); //Dateコンストラクタでオブジェクトdを生成
  d instanceof Date;
  true
  d instanceof Object;
  true

  function Derived() {} //派生クラス相当のコントラクタ
  function Date() {} //基底クラス相当のコントラクタ
  Derivd.prototype = new Base();

  var obj = new Derived();
  obj instanceof Derived;
  true
  obj instanceof Base;
  trueobj instance Object;
  true


  Derived.prototype.isPrototypeOf(obj);
  true
  Base.prototype.isPrototypeOf(obj);
  true
  Object.prototype.isPrototypeOf(obj);
  true


  var obj = {}; //空のオブジェクト生成
  obj.doit = function() {print('doit');}  //プロパティ追加

  //コンストラクタなしでオブジェクト生成
  var obj = {doit: function() {print('doit');}}


  var obj = {doit: function() {print('doit');}}
  'doit' in obj;  //オブジェクトobjがdoitプロパティを持つので結果は真
  true
  'toString' in obj;  //toStrigプロパティをObjectから継承しているので結果は真
  true


  //直接プロパティのみを列挙するコード
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      print(key);
    }
  }


  var obj = {x:1, y:2};
  Object.keys(obj);
  ["x", "y"]

  //配列がオブジェクトであることの意味は「7-1　配列」を参照
  var arr = [3, 4];
  Object.keys(arr);
  ["0", "1"]
  Object.getPropertyNames(arr); //lengthプロパティのenumerable属性は偽
  ["length", "0", "1"]

  //Object.prototypeオブジェクトのインスペクション
  Object.keys(Object.prototype);  //enumerableなプロパティは存在しない
  []
  object.getOwnpropertyNames(Object.prototype);


//ECMAScriptのObjectクラス

  //Objectクラスをプロトタイプ継承しないオブジェクト

  var obj = Object.create(null);
  print(Object.getPrototypeOf(obj));
  null'toString' in obj;
  false

  var obj = Object.create(Object.prototype);  //var obj = {} と等価


  function MyClass() {}
  var Proto = MyClass.prototype;
  Proto = {x:2, y:3}; //プロトタイプオブジェクト
  var obj = new MyClass();

  //と以下のコードが等価

  var Proto = {x:2, y:3}; //プロトタイプオブジェクト
  var obj = Object.create(Proto);

  //ex.
  print(obj.x, obj.y);  //プロパティをプロトタイプ継承していることの確認
  2 3


  var obj = {x:2, y:3};
  //と等価のコードが以下
  var obj = Object.create(object.prototype,
              {x: {value:2, writable:true, enumerable:true, configurable:true},
               y: {value:3, writable:true, enumerable:true, configurable:true}});


  var obj = Object.create(Object.prototype, {x: {value:2}});

  //明示的に指定した属性以外の値はfalse (valueのデフォルト値はundefined)
  Object.getOwnpropertyDescriptor(obj, 'x');
  ({value:2, writable:false, enumerable:false, configurable:false})

  //プロパティyを追加
  Object.defineProperty(obj, 'y', {value:3, enumerable:true});

  Object.getOwnpropertyDescriptor(obj, 'y');  //確認
  ({value:3, writable:false, enumerable:true, configurable:false})

  //プロパティzを追加
  Object.defineProperties(obj, {z: {value:function(){print('z called');},
  enumerable:true}});

  Object.getOwnpropertyDescriptor(obj, 'z');  //確認
  ({value:(function () {print("z called");}), writable:false, enumerable:true,
  configurable:false})

  //enumerable属性を確認(Object.keysでも可能)
  for(var key in obj) {
    print(key);
  }
  y
  z


  var obj = Object.create(Object.prototype,
                          {x: {get:function(){print('get called');},
                               set:function(v){print('set called');}
                              }
                          });

  print(obj.x);  //プロパティ値を読もうとするとゲッター関数が呼ばれる
  get called
  undefined  //ゲッター関数の返り値が返る (上記は何もreturnしていないのでundefined値)

  obj.x = 1;  //プロパティ値に書き込もうとするとセッター関数が呼ばれる
  set called

  print(obj.x); //上記セッター関数は何もしていないのでプロパティ値の書き換えはできていない
  get called
  undefined

  var obj = {get x() {print('get called');},
             set x(v){print('set called');}};


  //動かない(無限ループの致命的なバグ)
  var obj = Object.create(Object.prototype,
                          {x: {get:function(){return this.x;},
                               set:function(){this._x = v;}},
                          });


  //隠す意図のプロパティ＿xを使うアクセッサの例(一応動く)
  var  obj = Object.create(Object.prototype,
                           {x: {get.function(){return this._x;},
                                set.function(){this._x = v;},
                            _x: {writable: true}
                               }
                           });


  //オブジェクト生成を意図した関数
  function createObject(){
    var_x = 0;  //変数名xでも問題ないがわかりづらくなるので、ここではあえて＿xで。

    //アクセッサを定義したオブジェクトを返す
    return {get x() {return _x},
            set x(v) {_x = v;}
          };
  }

  //ex.
  var  obj = createObject();  //オブジェクト生成

  print(obj.x); //読み込み(内部的にはゲッター呼び出し)
  0
  obj.x = 1;  //書き換え(内部的にはゲッター呼び出し)
  1
  print(obj.x);
  1



//Objectクラス

  Object.prototype.foobar = 'FOOBAR'  //Object.prototypeオブジェクトにプロパティ追加
  FOOBAR

  var d = new Date(); //任意オブジェクトの一例としてDateオブジェクト
  d.foobar; //foobarプロパティを読み取ると上記値を取得
  FOOBAR

  'x'.foobar; //文字列オブジェクトもfoobarプロパティを読み取り可能
  FOOBAR

  (0).foobar; //数値オブジェクトもfoobarプロパティを読み取り可能
  FOOBAR
