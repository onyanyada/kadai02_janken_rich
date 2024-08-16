let gachaImg = '';
let gachaItem = '';
let gachaExp = '';
let gachaScore = 0; //変数用意


// ルーレットをクリックしたとき
$(".gu_btn6").on("click", function () {
    $(".gachaUseBtn").css('display', 'block');

    const r = Math.ceil(Math.random() * 4);

    $(".gu_btn6").addClass('cantclick');//再clickできなくする
    localStorage.setItem('clickedGacha', 'true'); // フラグを設定

    //2.if分岐処理

    if (r == 1) {
        gachaImg = '<img src="./img/key.png" width="100px">';
        gachaItem = '鍵';
        gachaExp = 'ロッドの合計好感度を一度だけ確認できるよ';
        gachaScore = -1;
    }
    if (r == 2) {
        gachaImg = '<img src="./img/cha.png" width="100px">';
        gachaItem = '異国の茶葉';
        gachaExp = 'お茶会で使うことができるよ';
        gachaScore = 1;
    }
    if (r == 3) {
        gachaImg = '<img src="./img/maho.png" width="100px">';
        gachaItem = '魔法を使える猫';
        gachaExp = 'ロッドの好感度を1上げることができるよ';
        gachaScore = 2;
    }
    if (r == 4) {
        gachaImg = '<img src="./img/null.png" width="100px">';
        gachaItem = 'はずれ';
        gachaExp = 'ポイ活したらガチャにまた挑戦できるよ';
        gachaScore = 2;
    }



    //3.表示処理
    resultView6();


});



//3.表示処理
const resultView6 = () => {
    $(".imgItem").html(gachaImg);
    $(".getItem").html(gachaItem);
    $(".gachaExp").html(gachaExp);
    localStorage.setItem("gachaScore", gachaScore); // ガチャの点数を保存
    localStorage.setItem("gachaItem", gachaItem);//ガチャアイテム名を保存
    localStorage.setItem("gachaImg", gachaImg);//ガチャアイテム画像を保存
    localStorage.setItem("gachaExp", gachaExp);//ガチャアイテム説明を保存

}


// ルーレットボタン
$(".wheel").on("click", function () {
    if ($(this).hasClass("stopped")) {
        $(this).removeClass("stopped"); // クラスを外して回転再開
    } else {
        $(this).addClass("stopped"); // クラスを追加して回転停止
    }
});


// ガチャをリロードしても再clickできなくする
$(document).ready(function () {//DOMが読み込み終わった段階で以下発生
    const clickedGachaSaved = localStorage.getItem('clickedGacha');
    if (clickedGachaSaved === 'true') {//これがないとscenarioもゲーム結果も表示されなくなる
        $(".gu_btn6").addClass('cantclick');//再clickできなくする
    }
});