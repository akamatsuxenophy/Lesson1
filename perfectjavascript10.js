//イベント

  //イベントハイドラをプロパティに設定する
  var btn = document.getElementById('foo');
  function sayFoo() {
    alert('foo');
  }

  btn.onclick = sayFoo;

  // btn.onclick = sayFoo();  //関数を実行した返り値を設定することになるので誤り
  // btn.onclick = "sayFoo()";  //関数の実行を文字列としても実行されない
  // btn.onclick = sayFoo;  //関数自体を設定しているので正しく動作する


  //イベントリスナの登録
  var btn =document.getElementById('foo');
  btn.addEventListener('click', function (e) {
    alert('foo');
  }, false);


  //同一イベントリスナの登録
  var btn = document.getElementById('foo');
  function sayHello() {
    alert('Hello');
  }
  btn.addEventListener('click', sayHello, false);
  btn.addEventListener('click', sayHello, false);  //同じイベントリスナは無視される
  btn.addEventListener('click', sayHello, true);   //フェーズが異なれば別のものとして登録される


  //イベントリスナの実行順序
  var btn = document.getElementById('foo');
  function sayFoo() {
    alert('foo');
  }
  function sayBar() {
    alert('bar');
  }
  function sayBaz() {
    alert('baz');
  }
  btn.addEventListener('click', sayFoo, false);
  btn.addEventListener('click', sayBar, false);
  btn.addEventListener('click', sayBaz, false);
  btn.addEventListener('click', sayFoo, false);  //これは無視されるのが仕様

  // ボタンクリックした時に期待する挙動は、foo, bar, bazの順にダイアログが表示されること
  // Firefox, Google, Chrome, Safariの場合は期待通りに動作する
  // Operaの場合はbar, baz, fooとなり、２回目のbtn.addEventListener('click', sayFoo,
  // false)で登録順序が変更されていることがわかる


  // イベントリにオブジェクトを登録する
  var btn = document.getElementById('foo');
  var eventListener = {
    mesage: 'This is an event listener object.',
    handleEvent: function(e) {
      alert(this.message);
    }
  };
  btn.addEventListener('click', eventListener, false);
  //ボタンクリック時に'This is an event listener objct.'というメッセージダイアログが表示される

  //イベントハンドラ / イベントリスナ内でのthis
  document.getElementById('foo').onclick = function() {/*thisは#fooの要素*/};

  var Listener = function() {};
  lib.handleClick = function(event) {/*thisはlib?*/};
  document.getElementById('foo').onclick = lib.handleClick;
  // => lib.handleClick内でのthisはlibではなく#fooの要素


  document.getElementById('foo').onclick = function(event){
    lib.handleClick(event);
    // => lib.handleClick内でのthisはlibになる
  };


  //stopPropagation()とstopImmediatePropagation()の違い
  var btn = document.getElementById('foo');
  function sayFoo(event) {
    alert('foo');
    event.stopPropagation();
  }
  function sayBar(event) {
    alert('bar');
    event.stopImmediatePropagation();
  }
  function sayBaz(event) {
    alert('baz');
  }
  btn.addEventListener('click', sayFoo, false);
  btn.addEventListener('click', sayBar, false);
  btn.addEventListener('click', sayBaz, false);
  //ボタンをクリックするとfoo, barのダイアログは表示されるが、bazのダイアログは表示されない


  //独自イベントを発火させる
  var event = document.createEvent('Events');
  event.initEvent('myevent', true, true);
  var target = document.getElementById('foo');
  target.addEventListener('myevent', function() {
    alert('My event is fired');
  }, false);
  target.dispatchEvent(event);


  //dispatchEvent()を非同期で実行する
  window.setTimeout(function() {
    tsrget.dispatchEvent(event);
  }, 10);
