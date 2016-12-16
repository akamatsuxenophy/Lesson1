$(function(){
  console.log('start');

  //画像クリックのイベント
  $('img').on('click', function(e){
    var span_path = $(e.target).parent('a').prev('span').html();
    var img_path = $(e.target).attr('src');
    var p_path = $(e.target).parent('a').next('p').html();
    $("#hname").text(span_path);
    $("#himg").attr('src',img_path);
    $("#htext").text(p_path);
    $('#clear').show();
    $('#zoomBox').show();

  });

  //拡大画面を閉じる
  $("#clear").on('click',function(){
    $('#zoomBox').hide();
    $('#clear').hide();
  });

  //スモークのサイズ調整
  $(window).bind('resize click',function(){
    var w = $(window).width();
    var h = $(window).height();
    var zh = $('#zoomBox').height();
    $('#clear').height(h);
    $('#clear').width(w);
    $('#zoomBox').css("top", (h - zh) / 2);
  });
});
