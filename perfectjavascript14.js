//WEBアプリケーション
//History API
  //ハッシュフラグメント
  function goToPage(num){
    //コンテンツを更新する
    updateContent(num);

    //ハッシュフラグメントに現在の状態を保存
    location.hash = '#!page' + num;
  }

  //状態の復元
  window.onhashchange = function() {
    //ハッシュフラグメントからの状態を取得
    var num = location.hash.match(/#!page=([0-9]+)/)[1];

    //コンテンツを更新する
    updateContent(num);
  };



//インターフェース

  //Web上で通常利用されるURL
  http://www.example.com/#!/foo/bar

  //GoogleのクローラがアクセスするURL
  http://www.example.com/?_escaped_fragment_=/foo/bar


  // /search/fooへのページ遷移が発生する
  location.href = '/search/foo';

  //AJAX的に　/search/fooのコンテンツを取得して表示する
  uploadContent('/search/foo');
  //ハッシュフラグメントを　#!/search/foo　に変更する
  location.hash = '#!/search/foo';


  //pushStateを利用したURL更新
  //AJAX的に /search/fooのコンテンツを取得して表示する
  uploadContent('/search/foo');
  //URLを /search/foo に変更する
  history.pushState(null, 'fooの検索結果', '/search/foo');


  //履歴を１つ戻る(ブラウザの戻るボタンと等価)
  history.back();
  //履歴を１つ進む(ブラウザの進むボタンと等価)
  history.forward();
  //履歴を２つ戻る
  history.go(-2);


  //ページの移動を監視する
  window.onpopstate = function() {
    //URLのパスを分解する
    var pathname = location.pathname.substring(1).split('/');

    //トップのパス名を参照して適切なコンテンツを表示する
    switch(pathnames[0]) {
      case 'list':
        /*リストページを表示する*/
      case 'search':
        /*検索ページを表示する*/
    }
  };


  //遷移元の情報
  var date = {
    //遷移元のタイトル
    prev_title: document.title,
    //遷移元のURL
    prev_url: location.pathname
  };

  //第１引数に情報を渡す
  history.pushState(date, null, '/foo/bar');


  //ページのリロード / リロード時
  window.onload = updateContent;

  //ページ履歴の移動時
  window.onpopstate = updateContent;

  //コンテンツの更新時
  function goToContent(data, title, pathname) {
    //ページ履歴の追加
    history.pushState(data, title, pathname);
      updateContent();
    }

    //URL及びhistory.stateを参照してコンテンツ更新
    function updateContent() {
      //URLを参照してコンテンツを更新する
      /*do something*/

      //history.stateを参照してコンテンツを更新する
      if (history.state && history.stste.prev_url) {
        //情報がある場合は戻るリンクを設定する
        backLink.href = history.state.prev_url;
        backLink.textContent = history.state.prev_title || '戻る';
      } else {
        //情報がない場合は戻るリンクを非表示にする
        backLink.style.display = 'none';
      }
    }


    //ページ履歴に差し替え
    function toggleCheck(chkbox) {
      //チェックボックスのオンオフを反転する
      chkbox.checked = !chkbox.checked;

      //現在の状態オブジェクトをコピーする
      var data = {};
      for(var prop in (history.state || {})) {
        data[prop] = history.state[prop];
      }
      //チェック状態を追記
      data.chkbox = chkbox.checked;

      //履歴情報を上書きする
      history.replaceState(data, dicument.title);
    }



//pplicationCache API
  //キャッシュの更新確認

  window.onload = function() {
    //１時間おきに更新を確認する
    setInterval(function() {
      applicationCache.update();
    }, 100 * 60 * 60)
  };


  //最新バージョンの利用可能通知
  applicationCache.onupdateready = function() {
    var ok = confirm('最新のバージョンが利用可能です。\n' +
                     'ページをリロードしてもよろしでしょうか？');
    if (ok) location.reload();
  };
r
