$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
});






//toppageへのボタン

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){//上から100pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
	var scroll = $(window).scrollTop(); //スクロール値を取得
	if(scroll > 0){
		$(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
        $('body,html').animate({
            scrollTop: 0
        }, 2000,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
            $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
        });	
	}
    return false;//リンク自体の無効化
});