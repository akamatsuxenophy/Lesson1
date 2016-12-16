  //データの保存と参照
//データの保存、以下の３桁は等価
localStorage.setItem('foo', 'bar');
localStorage.foo = 'bar';
localStorage['foo'] = 'bar';

//データの参照、以下の３桁は等価
var data = localStorage.getItem('foo');
var data = localStorage.foo;
var data = localStorage['foo'];


//文字列以外の読み書き
//任意のオブジェクト
var obj = {x:1, y:2};

//オブジェクトをJSON文字列に変換して保存
localStorage.foo = JSON.stringify(obj);

//保存されたJSON文字列をオブジェクトに復元
var obj2 = JSON.parse(localStorage.foo);


//データの削除
//'foo'というキーで保存された値を削除する
localStorage.removeItem('foo');
dalete localStorage.foo;
delete localStorage['foo'];

localStorage.clear();


//データの列挙
//保存されているすべてのデータを列挙する
for(var key in localStorage) {
  //直接のプロパティ飲みを参照する
  if(localStorage.hasOwnProperty(key)) {
    var value = localStorage[key];

    /* do something */
  }
}

//if in文によるデータの列挙
for(var key in localStorage) {
  //直接のプロパティのみを参照する
  if(localStorage.hasOwnProperty(key)) {
    var value = localStorage[key];

    /* do something */
  }
}


//storageイベントの利用例
window.addEventListener('storage', function(event) {
  if(event.key === 'userid') {
    var msg = 'こんにちは、' + event.newValue + 'さん';
    document.getElementById('msg').textContent = msg;
  }
}, false);

//cookieについて
//値の保存
document.cookie = 'foo=1';
console(document.cookie);  //-> 'foo=1'

//値の保存(1時間の期限付き)
document.cookie = 'bar=2; expires=' + new Date(Date.now()+3600000).toGMTString();
console.log(document.cookie);  //-> 'foo=1; bar=2'

//値の削除
document.cookie = 'foo=; expires=' + new Date().toGMTString();

//１時間後
setTimeout(function() {
  console.log(document.cookie);  //->''
}, 3600000);



var SERVICE_NAME = 'SERVICE_NAME',
storage = null;

//loadイベントでローカル変数に読み込み
window.onload = function() {
  try{
    storage = JSON.parse(localStorage[SERVICE_NAME] || '{}');
  } catch(e) {
    storage = {};
  }
};

//beforeunloadイベントでlocalStorageに書き出し
window.onbeforeunload = function() {
  localStorage[SERVICE_NAME] = JSON.stringify(storage);
};


//複数タブ間でのデータ同期
//設定を変更するたびにlocalStorageへ書き出す
function setStorage(key, value) {
  storage[key] = value;
  localStorage[SERVICE_NAME] = JSON.stringify(storage);
};

//別タブでのlocalStorageの変更をローカル変数に読み込む
window.onstorage = function(event) {
  if(event.key === SERVICE_NAME && event.newValue) {
    storage = JSON.parse(event.newValue);
  }
};


//localStorageのバージョン管理の例
window.onload = function() {
  if(!localStorage.version) {
    //追加するプロパティ
    localStorage.foo = 'foo';
    localStorage.bar = 'bar';

    //バージョンを更新
    localStorage.version = '1.0';
  }

  if(localStorage.version === '1.0') {
    //バラバラにセットしていたプロパティを統合
    localStorage.fooder = JSON.stringify({
      foo: localStorage.foo;
      bar: localStorage.bar;
    });
    //廃止するプロパティ
    delete localStorage.foo;
    delete localStorage.bar;

    //バージョンを更新
    localStorage.version = '1.1';
  }
}


window.localStorage = window.localStorage || (function() {
  var storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value;
    },
    getItem: function(key) {
      return storage[key];
    },
    removeItem: function(key) {
      delete storage[key];
    },
    clear: function() {
      storage = {};
    },
    emulated: true
  };
})();


//indexDBのベンダープレフィックス対応
var indexDB = window.indexDB ||
              window.webkitIndexDB ||
              window.mozIndexDB;


//データベースに接続
var db = null;

//データベースに接続する
var request = indexDB.open('testdb');

//データベースに接続成功
request.onsuccess = function(event) {
  //データベースをグローバル変数dbから参照可能にする
  db = event.target.result;
};

//データベースに接続失敗
request.onerror = function(event) {
  alert('データベースの接続に失敗しました');
};


//DBのバージョンを変更する
var request = db.setVersion('1.0');

request.onsuccess = function(event) {
  //オブジェクトストアを作成する
  var store = db.createObjectStore('books', {
    keyPath: '_id',
    autoIncrement: true
  });
};


//各種DB操作の実装例
//ベンダープレフィックス対応
var IDTransaction = window.IDBTransaction || window.webkit IDBTransaction;

//データ追加のラッパー関数
function addData(data) {
  //トランザクションの開始
  var transaction = db.transaction(['books'], IDBTransaction.READ_WRITE);
  //データ追加(addの代わりにputでも可)
  var request = transaction.objectStore('books').add(data);

  request.onsuccess = function(event) {
    //成功するとキーを返す
    var key = event.target.result;
    console.log('success! key ->', key);
  };

  //データ参照のラッパー関数
  function getData(key) {
    //トランザクション開始
    var transaction = db.transaction(['books']);
    //データ参照
    var request = transaction.objectStore('books').get(key);

    request.onsuccess = function(event) {
      //成功するとデータを返す
      var data = event.target.result;
      console.log('success! data ->', data);
    };
  }

  //データ削除のラッパー関数
function deleteData(key) {
  //トランザクションの開始
  var transaction = db.transaction(['books'], IDBTransaction.READ_WRITE);
  //データ削除
  var request = transaction.objectStore('books').delete(key);

  request.onsuccess = function(event) {
    console.log('success');
  };
}


//各種DB操作の実行例
addData({isbn:'477413614X', name:'パーフェクトC#'});
key -> 1;

addData({isbn:'4774139904', name:'パーフェクトJAVA'});
key -> 2;

addData({isbn:'4774144371', name:'パーフェクトPHP'});
key -> 3;

getData(3)
data -> {
  _id: 3,   //_idプロパティが自動付与されている
  isbn: '4774144371',
  name: 'パーフェクトPHP'
}

deleteData(3)
success
getData(3)
data -> undefined


//インデックスの作成
var request = db.setVersion("1.1");

request.onsuccess = function(event) {
  var transaction = event.target.result;
  var store = transaction.objectStore('books');

  //isbnプロパティのインデックスを作成
  var index = store.createIndex('isbnIndex', 'isbn');
};


//データの検索と更新
var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeRange;

//トランザクションとオブジェクトストアの準備
var transaction = db.transaction(['books'], IDBTransaction.READ_WRITE);
var store = transaction.objectStore('books');

//範囲指定オブジェクトの生成
var range = IDBKeyRange.bound('4000000000', '5000000000');

//インデックス経由でデータを検索
var request =  store.index('isbnIndex').openCursor(range);

request.onsuccess = function(event) {
  // IDBCursorオブジェクトを取得
  var cursor = event.target.result;

  //データが存在する場合
  if(cursor) {
    //データを取得
    var data = cursor.value;

    //データを更新
    if(data.name === 'パーフェクトJAVA') {
      //スキーマを定義しなくてもデータ拡張が可能
      data,author = '井上　誠一郎、永井　雅人、松山　智大';
      cursor.upload(data);
    }

    //データを削除
    if(data.name === 'パーフェクトC#') {
      cursor.delete();
    }

    //次のデータを検索
    cursor.continue();
  }
};


//トランザクション
  //ロールバックの実装例
  var result = index.openCursor(keyRnge);
  result.onsuccess = functiona(event) {
    var cursor = event.target.result;
    if(cursor) {
      // readonlyフラグが立っていた場合
      if(cursor.value.readonly) {
        var transaction = event.target.transaction;
        //処理を中断しロールバックを実行
        transaction.abort();

      } else {
        //データの削除
        cursor.delete();
        //次のデータを検索
        cursor.continue();
      }
    }
  };


//Indexed Databaseの同期API
  //データベースに接続
  var db = IndexedDBSync.open('testdb');

  if(db.version !== '1.0') {
    //バージョン設定
    var transaction = db.setVersion('1.0');
    //オブジェクトストアの作成
    transaction.createObjectStore('books',{
      keyPath:'_id',
      autoIncrement: true
    });
  }

  //データの追加
  var transaction = db.transaction(['books'], function() {
    var store = transaction.objectStore('books');
    store.add({isbn: '4774139904', name: 'パーフェクトJAVA'});
  }, IDBTransactionSync.READ_WRITE);
