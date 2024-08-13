
// ----------------ガチャここから
let gachaImg = '';
let gachaItem = '';
let gachaExp = '';
let gachaScore = 0; //変数用意
// グーを選んだ時
$(".gu_btn6").on("click", function () {
    const r = Math.ceil(Math.random() * 4);


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

//-------------------ガチャここまで

// ルーレットボタン
$(".wheel").on("click", function () {
    if ($(this).hasClass("stopped")) {
        $(this).removeClass("stopped"); // クラスを外して回転再開
    } else {
        $(this).addClass("stopped"); // クラスを追加して回転停止
    }
});
