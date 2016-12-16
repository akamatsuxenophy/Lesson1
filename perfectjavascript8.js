//HTMLとjavascript

  window.onLoad = function(){alert('hello');};

  //DOMContentLoadイベントを監視する
  document.addEventListener('DOMContentLoad', function(){
    alert('hello');
  }, false);


  //IEでDOMContentLoadedイベントをエミュレート
  function IEContentLoad(callback) {
    (function(){
      try{
        document.documentElement.doScroll('left');
      } catch(error) {
        setTimeout(arguments.callee, 0);
        return;
      }
      callback();
    }());
  }
  IEContentLoad(function() {
    alert('hello2');
  });


  //JavaScriptの動的ロード
  var script = document.createElement('script');
  script.src = 'other-javascript.js';
  document.getElementsByTagName('head')[0].appendChild(script);



//デバッグ


  //alertの表示文字列を変更する
  var Foo = function(text) {
    this.text = text;
  };

  var foo = new Foo('Hello, alert');
  alert(foo); //=>[object Object]と表示される
  foo.toString = function() {
    return this.text;
  };
  alert(foo); //=> Hello, alert. と表示される


  //ダミーconsoleオブジェクト
  if(!window.console) {
    (function(win) {
      var names =[
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml',
        'error', 'exception', 'group', 'groupCollapsed', 'groupEnd',
        'info', 'log', 'notifyFirebug', 'profile', 'profileEnd',
        'table', 'time', 'timeEnd', 'trace', 'warm'];
      var consoleMock = {};
      for (var i = 0, len = names.length; i < len; i++) {
        consoleMock[names[i]] = function() {};
      }
      win.console = consoleMock;
    }(window));
  }

  console.log();
  console.debug();
  console.error();
  // console.warm();
  console.info();
  //機能自体は同じ


  //時間、回数、パフォーマンスを計測する
  console.time('foo');
  alert('foo計測開始');
  console.time('baz');
  alert('baz計測開始');
  console.timeEnd('baz');
  alert('baz計測終了');
  console.timeEnd('foo');
  alert('foo計測終了');


  //console.count
  for (var i = 0; i < 100; i++) {
    console.count('foo');
    if (i % 10 === 0) {
      console.count('bar');
    }
  }


  //console.assert
  function foo(notNullObj) {
    console.assert(notNullObj != null, 'notNullObj is null or undefined');
    //some code
  }

  // foo(1);  => アサーションに引っかからない。正しい呼び方
  // foo(null);  => アサーションに引っかかる。誤った呼び方
  // foo();  => アサーションに引っかかる。誤った呼び方


  function foo() {
    //...何かの処理
    debugger; //ここまできたらデバッガが起動する
    //...何かの処理
  }


  foo.addEventListener('click', function (event) {
    //fooがクリックされた時に実行する処理
  }, false);
  //ここで
  // functio(event){};
  //という記述が無名関数になります。


  //barという名前をつける
  foo.addEventListener('click', function bar(event) {
    //fooがクリックされた時に実行する処理
  }, false);


  //barという関数を別に定義しておく
  function bar(event) {
    //fooがクリックされた時に実行する処理
  }
  foo.addEventListener('click, bar, false');


  //barという関数オブジェクトを用意しておく
  var bar = function(event) {
    //fooがクリックされた時に実行する処理
  }
  foo.addEventListener('click', bar, false);



//クロスブラウザ対応


  //クロスブラウザのイベントリスナ登録メソッド
  var assEvent(target, name, fn) = function() {
    //WebページにアクセスしているブラウザがInternet Explorerか
    var isIE = navigator.userAgent.indexOf('MSIE') > 0;
    if(isIE) {
      //IEにはaddEventListener()メソッドは存在しないので代わりにattachEvent()メソッドを使う
      addEvent = function(target, name, fn){
        target.attachEvent('on' + name, fn);
      };
    } else {
      //IE以外ではddEventListener()メソッドを使う
      addEvent = function(target, name, fn) {
        target.addEventListener(name, fn, false);
      };
    }
    addEvent(target, name, fn);
  }


  //クロスブラウザのイベントリスナ登録メソッド
  var addEvent(target, name, fn) = function() {
    if(window.addEventListener) {
      //addEventListener()メソッドがある場合はそれを使う
      addEvent = function(target, name, fn) {
        target.addEventListener(name, fn, false);
      };
    } else if(window.attachEvent) {
      //attachEvent()メソッドがある場合はそれを使う
      addEvent = function(target, name, fn) {
        target.attachEvent('on' + name, fn);
      };
    }
    addEvent(target, name, fn);
  }



//Windowオブジェクト


  location.reload(true);  //=>　ブラウザキャッシュを無視して再読み込み
  location.reload(false); //=>　ブラウザキャッシュを利用して再読み込み
  location.reload();  //=>　location.reload(false);と同じ


  //historyオブジェクト
  history.back(); //履歴を戻る
  history.forward();  //履歴を進める
  history.go(1);  //履歴を1回分進める。history.forward();と同じ
  history.go(-2); //同じ履歴を2回分戻る
