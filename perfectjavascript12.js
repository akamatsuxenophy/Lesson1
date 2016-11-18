

//メソッドチェーンを使わない表記
//divとaの２つの要素を対象に操作しているので期待どおりに動作する
var div = $('<div><a></a></div>');
var a = div.find('a');
a.text('jQuery.com');
a.attr('href', 'http://jquery.com');
//a.end()はメソッドチェーンを使わない場合は意味がないので記述しない
div.appendTo('body');



//$関数

//cssセレクタでid="foo"の要素の子要素からclass="bar"のdiv要素を抽出する
$('#foo div.bar');

//同じくid="foo"の要素の子要素からclass="bar"のdiv要素を抽出する
$('div.bar', '#foo');

//以下のように指定しても同じ
var foo = document.getElementById('foo');
$('div.bar', foo);


//DOMの要素を作成する
$('<div>新しいdiv要素</div>');


//body要素をjQueryオブジェクトに変換する
$(document.body);


//DOM構築後のイベントリスナを設定する
$(function() {
  //DOM構築後の処理
});

//これと同じ
$(document).ready(function() {
  //DOM構築後の処理
});


//AJAX()関数
$.ajax('/foo', {
  type: 'GET',
  success: function (data, status, xhr) {
    //成功した時の処理
  },
  error: function (xhr, status, errorThrown) {
    //失敗した時の処理
  }
});



//Deferred
//記述例
function foo() {
  var d = $.Deferred();  //Deferredオブジェクト生成
  //　非同期処理
  setTimeout(function() {
    d.resolve();   //Deferredに処理が終わったことを報告する
  }, 1000);
  return d.promise();  //Promiseオブジェクトを返す
}
function bar() {
  alert('bar');
};

// foo完了してからbarを実行する
foo().then(bar);


//状態遷移メソッド
var foo = function() {
  var d = $.Deferred();
  setTimeout(function() {
    //状態をresolveにする
    //因数を３つに指定する
    d.resolve('This is', 'resolve', 'deferred');
  }, 500);
  return d.promise();
};

var bar = function() {
  var d = $.Deferred();
  setTimeout(function() {
    //状態をrejectにする
    //後続関数内でのthisと引数を２つ指定する
    d.rejectWith({
      massage: 'This is %s %s'
    }, ['reject', 'deferred.']);
  }, 500);
  return d.promise();
};

//done()はresolvedの時に実行される後続関数を指定するメソッド
foo().done(function (arg1, arg2, arg3) {
  console.log('%s %s %s', arg1, arg2, arg3);
});

// fail()はrejectedの時に実行される後続関数を指定するメソッド
bar().fail(function (arg1 arg2) {
  console.log(this.message, arg1, arg2);
});

/*consoleに表示される結果

This is resolved deferred.

This is rejected deferred.
*/


//後続関数指定メソッド
var foo = function() {
  var d = $.Deferred();
  setTimeout(function() {
    //reject状態にする
    d.reject('foo');  //後続関数に'foo'を渡すように設定
  }, 500);
  return d.promise();
};

foo()
.done(function(arg) {
  console.log(arg + 'success 1');
})
.fail(function(arg) {
  console.log(arg + 'failure 1');
})
.then(function(arg) {
  console.log(arg + 'success 2');
}, function(arg) {
  console.log(arg + 'failure 2');
})
.always(function(arg) {
  console.log(arg + 'complete 1');
})
.always(function(arg) {
  console.log(arg + 'complete 2');
});

/*
consoleに表示される結果

foo failure 1
foo failure 2
foo complete 1
foo complete 2
*/



//pipe()による引数の値の変更
var d = $.Deferred();
var filtered = d.pipe(function(arg) {
  return arg * 100;
});
d.resolve(100);

filtered.done(function(arg) {
  alert(arg);  //=> 10000
});


//done()による後続関数の実行
var foo = function() {
  //Deferredオブジェクトを作成
  var d = $.Deferred();
  //非同期処理
  setTimeout(function(arg) {
    alert('foo');
    d.resplve();
  }, 500);
  return d.promise();
};

var bar = function() {
  //Deferredオブジェクトを生成する
  var d = $.Deferred();
  //非同期処理
  setTimeout(function() {
    alert('bar');
    d.resolve();
  }, 1000);
  return d.promise();
};


//done()による後続関数の実行
var baz = function() {
  //同期処理
  alert('baz');
};

//アラートはfoo, bar, bazの順番で表示される
foo().done(bar).done(baz);


//アラートはfoo, barの順番で表示される
foo().pipe(bar).done(baz);


$.when($.get('/foo'), $.get('/bar'))
.done(function() {
  alert('ロード成功');
})
.fail(function() {
  alert('ロード失敗');
});


//jQueryのプラグイン作成
(function($) {
  $.fn.myplugin = function(method) {
    var methods = {
      init : function (options) {
        this,myplugin.setting = $.extend({}, this.myplugin.defaults, options)
        return this.each(function() {
        //初期状態
        });
      },
      someMethod: function() {
        //プラグイン特有の関数
      }
    }
    if(methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if(typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method"' + method + '" does not exist in myplugin plugin!');
    }
  }

  $.fn.myplugin.defaults = {
    foo: 'bar'
  }
  $.fn.myplugin.setting = {}
}(jQuery));

//上のプラグイン実行
$('selector')
  .myplugin({foo:'baz'});  //プラグインの設定
  .myplugin('someMethod');  //someMethodを実行



//Ajaxのところからふくしゅ
