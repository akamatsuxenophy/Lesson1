//データの処理

//配列

  //配列リテラル
  var arr = [3, 4, 5];
  typeof arr; //配列に対するtypeof演算の結果はobject
  object


  //各要素の型を揃える必要はない
  var s = 'bar';
  var arr = [1, 'foo', s, true, null, undefined, {x:3, y:4}, [2, 'bar'],
             function(a, b){return Number(a) + Number(b);}];
  print(arr);
  1, foo, bar, true,,,[object Object], 2, bar, function(a, b) {
    return Number(a) + Number(b);
  }


  //要素の途中をスキップした配列

  var arr = [3, 5];
  print(arr[0], arr[1], arr[2]);
  3 undefined 5

  var arr = [3, 4, ];
  print(arr.length);  //ECMAScript準拠では最後のカンマを無視
  2


  //配列の使用例
  var arr =[3, 4, 5];
  print(arr[0], arr[1], arr[2], arr[3]);
  3 4 5 undefined

  var s = '2';
  print(arr[s]);  //インデックス２の要素にアクセス
  5

  print(arr[s + 1]) //arr[21]にアクセスしていることに注意
  undefined

  var one = {toString:function() {return '1';} };  //文字列型に型変換すると'1'になるオブジェクト
  print(arr[one]);  //インデックス１の要素にアクセス
  4

  arr[2] = arr[2] * 2;  //インデックス2の値を書き換え
  10
  print(arr);
  3, 4, 10

  arr[3] = 20;  //要素数が３の時、インデックス３(先頭から４番目)の要素に代入すると要素数が増える
  20
  print(arr);
  3, 4, 10, 20

  arr[10] = 100;  //インデックス１０(先頭から１１番目)の要素に代入すると要素数が増える
  100
  print(arr)
  3, 4, 10, 20,,,,,100
  print(arr.length);
  11
  print(arr[4]);  //飛ばした要素にアクセスするとundefined値が返る
  undefined


  var arr  [2,,,,,3];  //途中を飛ばした配列(要素は２)
  print(arr.length);  //配列長は５。要素数と異なる
  5


  var arr = ['zero', 'one', 'two'];
  arr[arr.length] = 'three'  //arr.lengthを使い最後尾に要素を追加するイディオム
  print(arr);
  zero, one, two, three


  print(arr.length);  //自動で増分
  4

  arr[100] = 'x';  //途中の要素を飛ばし要素追加
  print(arr.length);  //自動で増分
  101


  var arr = ['zero', 'one', 'two'];
  arr.length = 2; //配列の長さを元に戻す(伸ばす)
  print(arr); //最後の要素がなくなる
  zero, one

  arr.length = 3; //配列の長さを元に戻す(伸ばす)
  print(arr); //伸びた部分にはundefined値
  zero, one,
  typeof arr[2];
  undefined

  print(arr['length']);


  //配列arrの全要素を列挙するイディオム
  for (var i = 0, len = arr.length; i < len; i++) {
    print(arr[i]);
  }


  var arr = [];

  arr[Math.pow(2, 32) - 2] = '';
  print(arr.length);  //配列長が2^32-1
  4294967295

  arr[Math.pow(2, 32) - 1] = '';
  print(arr.length);  //配列長は変わらない
  4294967295

  Object.keys(arr);
  ["4294967294", "4294967295"]  //2^32-1はプロパティとしては存在するが配列要素として認識されてない


  arr.forEach(function(e) {print(e);})


  var arr = ['zero', 'one', 'two'];

  //コールバックの引数
  //引数e: 要素値
  //引数i: インデックス値
  //引数a: 配列オブジェクト
  arr.forEach(function(e, i, a) {print(i, e);});
  0 zero
  1 one
  2 two


  //配列の要素が配列(多次元配列)

  var arr_of_arr =[1, ['zero', 'one', 'two', 'three']];
  one


  var arr = new Array(5);  //引数が１つで数値の場合、引数が配列の長さを指定する
  print(arr);
  ,,,,

  var arr = newArray(3, 4, 'foo');  //引数が配列の要素になる
  print(arr);
  3, 4, foo

  var arr = new Array('5');  //数値型への暗黙の型変換は起きないので、この引数
                             //この引数は０番目の要素指定と解釈される

  print(arr);
  5


  var arr = [];  //配列リテラルでオブジェクト生成
  arr.constructor;  //実態はnew Array()で生成したものと変わらない
  function Array() {
    [native code]
  }


  //配列オブジェクトのメゾッド呼び出し例
  var arr = ['zero', 'one', 'two'];
  arr.join('_');  //joinメゾッドの呼び出し
  "zero, one_two"

  [3, 4, 5].join('_');  //配列リテラルに直接メゾッド呼び出しも可能
  3_4_5


  var arr = ['zero', 'one', 'two'];

  for(var n in arr) {print(n);}  //インデックス値の列挙 = プロパティ名の列挙
  0
  1
  2

  Object.keys(arr);  //プロパティ名の列挙
  ["0", "1", "2"]


  Object.getOwnpropertyNames(arr);  //プロパティ名の列挙(enumerable属性を無視)
  ["length", "0", "1", "2"]

  '0' in arr; //インデックス０の存在のチェック
  true

  0 in arr; //数値０は文字列'0'に型変換されてチェック
  true

  3  in arr;  //インデックス３の存在チェック
  false

  'length' in arr;  //lengthプロパティの存在チェック
  true


  var arr = ['zero', 'one', 'two'];
  arr.x = 'x';  //配列オブジェクトにプロパティを追加
  for(var p in arr) {print(p);}
  0
  1
  2
  x


  var fake_arr {0:'zero', 1:'one', 2:'two', length:3};
  //fake_arr = ['zefro', 'one', 'two']と同じ?
  printprint(fake_arr[1]);  //これだけ見ると同じに見える
  one


  var arr = ['one', 'two', 'three', 'four', 'five'];
  arr.sort();


  //数値の配列ソート
  var arr = [1, 2, 20, 100, 55];
  arr.sortr(function(a - b){});
  [0, 1, 20, 55, 100]


  var arr = ['one', 'two', 'three'];
  Object.freeze(arr);
  arr.sort();
  TypeError: arr.sort() is read-only


  var arr = [];
  arr.push();
  TypeError: arr.sort() is read-only


  var arr = [];
  arr.push('<div>');
  arr.push(Date());
  arr.push('</div>');
  arr.join('');
  "<div>Sum May 22 2011 14:29:01 GMT+0900 (JST)</div>"


  var str = 'Sun May 22 2011 14:45:04 GMT+0900';
  str.split('');  //空白文字で文字列を分割
  ["Sun", "May", "22", "2011", "14:45:04", "GMT+0900", "(JST)"]

  str.split(/\s/);  //空白文字(正規表現で指定)で文字列を分割
  ["Sun", "May", "22", "2011", "14:45:04", "GMT+0900", "(JST)"]


  var arr = [3, 5, 4];
  var arr2 = arr;  //変数arr2から同じ要素が見える
  print(arr2);
  3,5,4

  arr2[0] = 123;  //変数arr2から配列の要素を書き換える
  print(arr);  //変数arrから変更か見える
  123,5,4


  var arr = [3, 5, 4];
  var arr2 = [].concat(arr);
  print(arr2);  //変数arr2から同じ要素が見える
  3, 5, 4

  arr2[0] = 123;
  print(arr);  //変数arr2から配列の要素を書き換える
  print(arr);  //変数arrから変更は見えない(要素をコピーしているから)
  3, 5, 4


  var arr = [3, 5, 4];
  var arr2 = arr.slice(0, arr.length);
  print(arr2);  //変数arr2から同じ要素が見える
  3, 5, 4

  arr[0] = 123; //変数arr2から配列の要素を書き換える
  print(arr); //変数arrから変更は見えない(要素をコピーしているから)
  3, 5, 4


  var arr = [ {x:2} ];  //オブジェクト参照を要素に持つ配列
  var arr2 = [].concat(arr);  //concatで要素のコピー
  arr2[0].x = 123;  //変数arr2から見える要素の参照先オブジェクトを変更
  print(arr);  //変数arrから変更が見えない(要素をコピーしているから)
  3, 5, 4


  var arr = [ {x:2} ];  //オブジェクト参照を要素に持つ配列
  var arr2 = [].concat(arr);  //concatで要素のコピー
  arr2[0].x = 123;  //変数arr2から見える要素の参照先オブジェクトを変更
  print(arr[0].x);  //変数arrから変更が見えない(shallowコピーだから)
  123


  var arr = ['zero', 'one', 'xxx', 'two', 'three'];
  delete arr[2];  //deleteで削除しただけでは
  print(arr);  //インデックス２番目は空のまま
  zero, one,, two, three
  arr.splice(2, 1);  //インデックス２番目から１つの要素を削除
  print(arr);  //削除された場所を詰めた配列になっている
  zero, one, two, three


  var rr = ['zero', 'one', 'two', 'three', 'four'];

  //map: 要素の文字列長を新しい要素とする配列に変換
  //filter: 要素の数値が偶数のものだけを抜き出す変換
  arr.map(function(e) {return e.length;}).filter(function(e) {return e % 2 == 0;});
  [4, 4]


  //配列リストの大量要素アクセス
  var arr = [];
  for (var i = 0; i < 1e7; i++) {
    arr[i] = '';
  }


  var arr = {};  //オブジェクト
  for (var i = 0; i < 1e7; i++) {
    arr[i] = '';
  }


  var arr = [];
  arr[1e9] = '';  //もし配列が連続したメモリ領域を確保するなら大量にメモリを消費するはず


  //配列風オブジェクトに対するArrayクラスのメゾッド呼び出し
  var fake_arr = (0: 'zero', 1: 'one', 2: 'two', length: 3);  //配列風オブジェクト

  fake_arr.join(',');  //普通にArrayクラスのメゾッドを呼ぶとエラー
  'TypeError: fake_arr is not a function'

  Array.join(fake_arr, ',');  //クラス風メゾッド風にArrayクラスのメゾッドを呼べる
  "zero, one, two"

  Array.push(fake_arr, 'three');  //pushをすると自動的にlengthプロパティも増加
  print(fake_arr.length);
  4
  Array.join(fake_arr, ',');
  "zero, one, two, three"


  Array.prototype.join.call(fake_arr, ',');
  "zero, one, two"


  //イテレータオブジェクトの生成方法
  var arr = ['zero', 'one', 'two'];
  var it = new Interator(arr, true);  //it = Interator(arr, true)でも可


  //イテレータの例

  var arr = ['zero', 'one', 'two'];

  //キーのみ(第二引数がtrue)
  var it = new Interator(arr, true):
  it.next();
  "0"
  it.next();
  "1"
  it.next();
  "2"
  it.nextuncaught exception: [object StopInteration]

  //キー、バリューペア(第2引数がfalse)
  var it = new Interator(arr, true);
  it.next();
  [0, 'zero']
  it.next();
  [1, 'one']
  it.next();
  [2, 'two']
  it.next();
  uncaught exception: [object StopInteration]


  //for inで使うIteratorオブジェクト
  var arr = ['zero', 'one', 'two'];

  it = new Interator(arr, true);
  for (var k in it) {print(k); }
  0
  1
  2

  var it = new Interator(arr, false);
  for (var pair in it) {print(pair); }
  0,zero
  1,one
  2,two


  //階乗を返す独自のイテレータ

  //イテレータの対象オブジェクト
  function Factorial(max) {
    this.max = max;
  }

  //独自のイテレータ
  function FactorialIterator(factorial) {
    this.max = factorial.max;
    this.count = this.current = 1;
  }

  //イテレータの実装
  FactorialIterator.prototype.next
    = function() {
      if(this.count > this.max) {
        throw StopIteration;
      } else {
        return this.current *= this.count++;  //n!の計算
      }
  };

  //FactorialとFactorialIteratorの関連付け
  //__iterator__プロパティは特別なプロパティ
  //Factorial.prototype.__iterator__ = function() {return new FactorialIterator(this);}


  //上の呼び出し
  var obj = new Factorial(5);
  for (var n in obj) {print(n); }
  1
  2
  6
  24
  120


  //階乗を出力(print)する関数
  function factorial_printer(max) {
    var cur = 1;
    for (var n = 1; n <= max; n++) {
      cur *= n;
      print('cur =' + cur);
    }
  }

  //上の呼び出し
  factorial_printer(5);
  cur = 1
  cur = 2
  cur = 6
  cur = 24
  cur = 120


  //ジェネレータの例
  function factorial_generator(max) {
    var cur = 1;
    for(var n = 1; n <= max ; n++) {
      cur *= n;
      yield(cur);
      print('cur =' + cur);
    }
  }

  //上の呼び出し
  //呼び出しても何も起きない(ジェネレータイテレータが返ってくるだけ)
  factorial_generator(5);
  ({})

  //ジェネレータイテレータのnextメソッドを呼ぶとfactorial_generator内のループが一回進む
  var g = factorial_generator(5);
  print(g.next());
  1
  print(g.next());
  cur = 1
  2
  print(g.next());
  cur = 2
  6
  print(g.next());
  cur = 14
  120
  print(g.next());
  cur = 120
  uncaught exception: [object StopIteration]


  //ジェネレータイテレータはfor in文で呼べる
  var g = factorial_generator(5);
  for(var n in g) {print('n =' + n); }
  n = 1
  cur = 1
  n = 2
  cur = 2
  n = 6
  cur = 6
  n = 24
  cur = 24
  n = 120
  cur = 120


  //上のfactorial_generatorを利用
  var factorial_arr = [i for each (i in factorial_generator(10))];
  print(factorial_arr)
  1,2,6,24,120,720,5040,40320, 362880, 3628800


  var factorial_arr = [i+1 for each(i in factorial_generator(10))];
  print(factorial_arr);
  [2, 3, 7, 25, 121, 721, 5041, 40321, 362881, 3628801]

  var factorial_arr = [i for each(i in factorial_generator(10)) if(i > 10)];
  [120, 720, 5040, 40320, 362880, 3628800]



//JSON


  //JSONの使用例
  //Json文字列からオブジェクトに変換
  var s = '{"x":1, "y":2, "var":"foobar"}';  //JSON文字列
  var obj = JSON.palse(s);
  print(obj.x);
  1

  //オブジェクトからJSON文字列に変換
  JSON.stringify({x:1, y:2, val:'foobar'});
  "{\"x\":1, \"y\":2, \"val\":\"foobar\"}"

  //配列のJSON文字列から配列オブジェクトに変換
  var arr = JSON.parse("[4, 3, 5]");
  print(arr);
  4, 3, 5
  Array.isArray(arr);
  true

  //文字列型のJSON文字列から数値に変換
  var s = JSON.parse('"foo"');
  typeof s;
  "string"

  //数値型のJSON文字列から数値に変換
  var n = JSON.parse(3);
  typeof n;
  "number"


  var s = JSON.parse('"foo"');  //シングルクォーテーションの文字列はエラー
  SyntaxError: JSON.parse

  var arr = JSON.parse("{x:1}");  //プロパティ名が文字列でないとエラー
  SyntaxError: JSON.parse



//日付処理


  var dt = new Date();  //引数なしでコンストラクタを呼ぶと現在時刻のDateインスタンスを生成
  print(dt);
  Sat May 07 2011 03:15:21 GMT+0900 (JST)


  var dt = new Date(2012, 0, 1);  //2012年1月1日
  print(dt);
  Sun Jan 01 2012 00:00:00 GMT+0900 (JST)


//正規表現


  //regexpの利用例
  var reg = new Reexp('^[0-9]');  //正規表現 ^[0-9] パターンのReExpインスタンスを生成
  reg .test('foo');  //入力シーケンス'foo'に対してマッチ
  false  //結果は偽
  reg.test('123');  //入力シーケンス'123'に対してマッチ
  true   //結果は真


  //正規表現リテラル
  var reg = /^[0-9]/;  //new Regexp('^[0-9]')と同じ
  reg.constructor;  //確認
  function RegExp() {
    [native code]
  }


  //グローバルマッチのフラグを指定
  var reg = /^[0-9]/g;
  new regExp('^[0-9]', 'g');

  //複数フラグを指定
  var reg = /^[0-9]gi;
  new RegExp('^[0-9]', 'gi');


  //先頭空白文字の正規表現パターン
  var reg = /^\s+/;

  //同じパターンを文字列で与えると\sのバックスラッシュ文字をエスケープする必要あり
  var reg = new RegExp('\\s+');


  //execメソッドの具体例(グローバルフラグなし)
  var text = 'abc def ghi jkl';
  var reg  = /(\w+)\s(\w+)/;  //(\w+)がグループ化の指定
  reg.exec(text);
  ["abc def", "abc", "def"]  //配列の０番目の要素はマッチ全体の文字列。配列の１番目以降はグループ参照の部分文字列


  //execメソッドの具体例(グローバルフラグあり)
  var text = 'abc def ghi jkl';
  var reg = /(\w+)\s(\w+)/g;

  reg.exec(text); //1度目の検索
  ["abc def", "abc", "def"]  //配列の０番目の要素はマッチ全体の文字列。配列の１番目以降はグループ参照の部分文
  //字列
  reg.exec(text);  //2度目の検索(1度目のマッチの次から検索)
  ["ghi jkl", "ghi", "jkl"]
  reg.exec(text);  //見つからないとnull
  null


  //replaceの具体例
  var text = 'abc def ghi jkl';

  //空白文字をカンマ文字に置換え
  text.replace(/\s/, ',');  //グローバルフラグなし
  "abc, def, ghi, jkl"

  text.replace(/\s/g, ',');  //グローバルフラグあり
  "abc, def, ghi, jkl"

  //空白の直前の文字をグループ化してカンマ文字の後ろに移動
  text.replace(/\s/g, ',$1');
  "ab, cde, fgh, ijkl"

  //第二引数に関数を渡すとマッチごとにコールバックされる
  //コールバック関数の第一引数にマッチ全体、第二引数以降はグループの前方参照
  //コールバック関数の返り値が置換え文字列
  //下記例は上記と同じ置換えをする
  text.replace(/(.)\s/g, function(m0, m1) {return ',' + m1;} );
  "ab, cde, fgh, ijkl"


  //matchの具体例
  var text = 'abc def ghi jkl';

  //グローバルフラグあり
  text.match(/\w/g);
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
  text.match(/(\w+)\s(\w+)/g);
  ["abc def", "abc", "def"]  //マッチしたすべての部分文字列を要素にもつ配列

  //グローバルフラグなし
  text.match(/(\w+)\s(\w+)/);
  ["abc def", "abc", "def"]   //配列の０番目の要素はマッチ全体の文字列
                              //配列１番目以降はグループ参照の部分文字列


  'use script';
