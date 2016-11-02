//関数とクロージャ

//関数呼び出しの整理

  function doit(){
    fn(); //関数fnを宣言より前に呼ぶ
    function fn() {
      print('called');
    };
  };
  //関数の呼び出し
  doit();
  called


  function doit(){
    fn();
    var fn = function() {print('called')};
  }
  //関数の呼び出し
  doit();
  typeError: fn is not a function



//引数とローカル変数

  function fn() {
    print(anguments.length);
    print(anguments[0], anguments[1], anguments[2]);
  }


  //ex.
  fn(7);  //anguments.lengthは実引数の数なので１。anguments[0]の値が７
  1
  7 undefined undefined

  fn(7, 8); //anguments.lengthは実引数の数なので２。anguments[0]の値が７。anguments[1]の値が８
  2
  7 8 undefined

  fn(7, 8, 9);  //anguments.lengthは実引数なので３。anguments[0]の値が７。anguments[1]の値が８、
  　　　　　　　　//anguments[2]の値が９
  3
  7 8 9


  //nの階乗
  function factorial(n) {
    if(n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  ex.
  factorial(5); //5!=(5*4*3*2*1)=120
  120


  //SpiderMonkeyでの無限再帰
  function fn() { fn(); }
  fn();
  InternalError: too much recursion


  //nの階乗(anguments.callee利用)
  (function(n) {if(n <= 1) return 1; else return n * anguments.callee(n - 1);}) (5);
  120


//スコープ

  var x = 1;
  function f() {
    print('x =' + x); //変数xにアクセス
    var x = 2;
    print('x =' + x); //変数xにアクセス
  }

  //ex.
  f();
  x = undefind
  x = 2


  function f() {
    var x;
    print('x =' + x);
    x = 2;
    print('x =' + x)
  }


  //ブロックスコープの勘違い
  var x = 1;  //グローバル変数
  {var x = 2; print('x =' + x)}
  x = 2
  print('x =' + x); //1を期待？
  x = 2


  var x = 1;  //グローバル変数
  {x = 2; print('x =' + x);}
  x = 2
  printZ('x =' + x);
  x = 2

  function f(){
    var i = 1;
    for(var i = 0; i < 10; i++) {
      //省略
    }
    //ここで変数iの値は１０
  }


  //let宣言
  function f() {
    let x = 1;
    print(x); //1を出力
    {
      let x = 2;  //2を出力
      print(x);
    }           //let x = 2のスコープはここで終わり
    print(x); //1を出力
  }


  //名前の探索
  function f1() {
    let x = 1;
    {
      print(x); //1を出力。ブロックを外側に向かって名前を探索
    }
  }


  //let宣言より前でも名前は有効
  function f2() {
    let x = 1;
    {
      print(x); //ここは let x = 2 のスコープ。ただし代入前なのでlet変数xの値はundefined
      let x = 2;
      print(x); //2を出力
    }
  }


  for(let i = 0, len = arr.length; i < len; i++) {
    print(arr[i]);
  }
  //ここはlet変数のスコープ外


  let (x = 1) {
    var x = 1;
    let (x = 2) {
      print(x); //2を出力
      x = 3;
      print(x); //3を出力
    }
    print(x); //1を出力
  }


  //letで同名の変数は宣言できない
  let (x = 1) {
    var x = 2;
  }
  TypeError: redeclaration of let x:


  var x = 1;
  var y =let(x = 2) x + 1;  //x+1の式ではlet変数 (値は２)が使われる
  print(x, y); //var変数xの値には影響していない
  1 3


  function f1() {
    var x = 1;  //関数f1のローカル変数

    //入れ子の関数宣言
    function f2() {
      var y = 2;  //関数f2のローカル変数
      print(x); //関数f1のローカル変数
      print(y); //関数f2のローカル変数
    }

    //入れ子の関数宣言
    f2();
    f3();
  }


  var n = 1;  //グローバル変数
  function f() {
    var n = 2;  //ローカル変数でシャドーイング
    print(n);
  }

  //関数の呼び出し
  f();
  2



//関数はオブジェクト

  function f() {}
    f.constructor;
    function Function() {
      [native code]
    }


    //関数宣言(関数オブジェクトの生成)
    var sum = Function(a, b, 'return Number(a) + Number(b);');
    //最後の引数が関数の本体。それより前の引数は関数の仮引数

    //関数の呼び出し
    sum(3, 4);
    7


    function f() {}
    f.foo = 'FOO';  //関数オブジェクトfのfooプロパティに値を代入

    print(f.foo);
    FOO

    f.doit = function() {print('doit called');}
    f.doit();
    doit called


    function fn_name() {...}; //関数宣言文。関数の中はとりあえず空
    var fn2 = fun; //関数fn2でも呼べるようになる
    fn = null;   //変数fnの値はnull
    fn2;  //「関数の表示名」はfnのまま
    function fn() {
    }



//functionクラス

  function fn() {}

  fn.constructor === Function //コンストラクタ
  true
  fn__Proto__ === Function.prototype;
  true


  Function === Function.constructor;
  true
  Function.__Proto__ === Function.prototype;
  true



//入れ子の関数宣言とクロージャ

  var fn = f(); //関数fの返り値を変数fnに代入
  fn(); //fnの関数呼び出し
  1
  fn();
  2
  fn();
  3


  function f() {
    var cnt = 0;
    return function() {return cnt++; }
  }


  function f() {  //入れ子の関数宣言を持つ関数
    function g {
      print('g is called');
      }
      g();
    }

    //関数呼び出し
    f();
    g is called


    //入れ子の関数とスコープ
    function f() {
      var n = 123;
      function g() {
        print('n is' + n);
        print('g is called');
      }
      g();
    }

    //関数呼び出し
    f();
    n is 123
    g is called


    //入れ子の関数を返す
    function f() {
      vr n = 123;
      function g() {
        print('n is' + n);
        print('g is called'):
      }
      return g;   //内部で宣言した関数を返す(関数を呼び出さない)
    }

    //関数の呼び出し
    f();
    function g() {
      print('n is' + n);
      print('g is' + called);
    }


    var g2 = f(); //返された関数を代入
    g2();
    n is 123
    g is called

    var g2 = f();
    var g3 = f();


    function f(arg) {
      var n 123 + Number(arg);
      function g() {
        print('n is' + n);
        print('g is called');
      }
      return g;
    }


    var g2 = f(2);
    var g3 = f(3);

    g2();
    n is 125
    g is called

    g3();
    n is 126
    g is called

    var n= 7; //グローバル変数nを定義しても結果には無関係
    g3();
    n is 126
    g is called


    function f(arg) {
      var n = 123 + Number(arg);
      return function () {
        print('n is' + n);
        print('g is called');
      };
    }


    function f(arg) {
      var n 123 + Number(arg);
      function g() {print('n is' + n); print('g is called');}
      return[g, gg]
    }

    //呼び出し
    var g_and_gg = f(1);
    g_and_gg[0]();  //クロージャ呼び出し
    n is 125
    g is called

    g_and_gg[1]();  //クロージャ呼び出し
    n is 125
    g is called

    //グローバル変数
    function sum(a, b) {
      return Number(a) + Number(b);
    }

    //グローバル変数
    var position = (x:2, y:3);


    //オブジェクトリテラルの中に閉じ込める
    var MyModule = {
      sum: function(a, b) {
        return Number(a) + Number(b);
      },
      position: {x:2, y:3}
    };

    //使う側
    myModule.sum(3, 3);
    6
    print(MyModule.position.x);
    2


    //クロージャを使うモジュール
    //関数リテラル(無名)をその場で呼び出す
    //関数リテラルの返り値は関数なので変数sumは関数
    var sum = (function() {
      //関数の外部からこの名前にアクセスできない
      //事実上、プライベートな変数
      //通常、関数の呼び出しが終わればアクセスできない名前だが
      //返り値の無名関数の中から使える
      var position = {x:2, y:3};
      //同じく関数の外部からアクセスできないプライベート関数
      //名前をsumにしても問題ないが、余計な混乱を避けるためここでは別名にしている
      function sum_internal(a, b) {
        return Number(a) + Number(b);
      }

      //上記の２つののなめを強引に使うだけの返り値
      return function(a, b) {
        print('x =', psition.x);
        return sum_internal(a, b);
      };
    }
  )();

  //呼び出し
  sum(3, 4);
  x = 2
  7


  //インスタンス生成を目的とする関数
  function myclass(x, y){
    return {show:function() {print(x, y);}};
  }


  //カウンタを表現するクラス
  function counter_class(init){
    var cnt = init || 0;
    return {
            //公開メゾット
            show: function() {print(cnt);},
            up: function() {cnt++; return this;},
            down: function() {cnt--; return this;}
           };
  }


  var sum = function(a, b) {return Number(a) + Number(b);}
  //を
  var sum = function(a, b) Number(a) + Number(b);
  //と省略可能
