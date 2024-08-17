
// ガチャをストーリーに反映
// ガチャで取得したアイテム名反映
const gachaItemGet = localStorage.getItem("gachaItem");
// ガチャで取得したアイテム画像反映
const gachaImgGet = localStorage.getItem("gachaImg");
// ガチャで取得したアイテムのスコア反映
const gachaScoreGet = localStorage.getItem("gachaScore");
// スコアを数字にする
const gachaNumber = parseInt(gachaScoreGet);
//ガチャで取得したアイテム説明を反映
const gachaExpGet = localStorage.getItem("gachaExp");

$('.gachaItem').text(gachaItemGet);
$('.gachaImg').html(gachaImgGet);
$('.gachaExp').html(gachaExpGet);



// リロード時
$(document).ready(function () {//DOMが読み込み終わった段階で以下発生
    const gachaUseBtn = localStorage.getItem('gachaUseBtn');
    if (gachaUseBtn === 'true') {

        $(".gachaUseBtn").css('display', 'block');
        //localStorage.removeItem('gachaUseBtn'); // フラグをリセット
    }
    const gachaUseExp = localStorage.getItem('gachaUseExp');
    if (gachaUseExp === 'true') {

        $('.gachaUseExp').addClass('dn');
        //localStorage.removeItem('gachaUseExp'); // フラグをリセット
    }


});