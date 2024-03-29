//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH) { 
    //headerの高さ以上になったら
    $('#header').addClass('fixed'); 
    //fixedというクラス名を付与
  } else { 
    //それ以外はfixedというクラス名を除去
    $('#header').removeClass('fixed'); 
  }
}
//ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
  //hrefの内容を取得
  var elmHash = $(this).attr('href'); 
  //headerの高さを引く
  var pos = Math.round($(elmHash).offset().top - 120); 
  $('body,html').animate({
    scrollTop: pos
  }, 500); //取得した位置にスクロール※数値が大きいほどゆっくりスクロール
  return false; //リンクの無効化
});
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime(); /* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime(); /* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});