// ----------------ガチャここから
gachaImg = '';
gachaItem = '';
let gachaScore = 0; //変数用意
// グーを選んだ時
$(".gu_btn6").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)


    //2.if分岐処理

    if (r == 1) {
        gachaImg = '<img src="./img/key.png" width="100px">';
        gachaItem = '鍵';
        gachaScore = -1;
    }
    if (r == 2) {
        gachaImg = '<img src="./img/cha.png" width="100px">';
        gachaItem = '異国の茶葉';
        gachaScore = 1;
    }
    if (r == 3) {
        gachaImg = '<img src="./img/maho.png" width="100px">';
        gachaItem = '魔法を使える猫';
        gachaScore = 2;
    }



    //3.表示処理
    resultView6();


});

// チョキを選んだ時
$(".cho_btn6").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)

    //2.if分岐処理
    if (r == 1) {
        gachaImg = '<img src="./img/key.png" width="100px">';
        gachaItem = '鍵';
        gachaScore = -1;
    }
    if (r == 2) {
        gachaImg = '<img src="./img/cha.png" width="100px">';
        gachaItem = '異国の茶葉';
        gachaScore = 1;
    }
    if (r == 3) {
        gachaImg = '<img src="./img/maho.png" width="100px">';
        gachaItem = '魔法を使える猫';
        gachaScore = 2;

    }



    //3.表示処理
    resultView6();


});

// パーを選んだ時
$(".par_btn6").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)
    //2.if分岐処理
    if (r == 1) {
        gachaImg = '<img src="./img/key.png" width="100px">';
        gachaItem = '鍵';
        gachaScore = -1;
    }
    if (r == 2) {
        gachaImg = '<img src="./img/cha.png" width="100px">';
        gachaItem = '異国の茶葉';
        gachaScore = 1;
    }
    if (r == 3) {
        gachaImg = '<img src="./img/maho.png" width="100px">';
        gachaItem = '魔法を使える猫';
        gachaScore = 2;
    }


    //3.表示処理
    resultView6();


});



//3.表示処理
const resultView6 = () => {
    $(".imgItem").html(gachaImg);
    $(".getItem").html(gachaItem);
    localStorage.setItem("gachaScore", gachaScore); // ガチャの点数を保存
    localStorage.setItem("gachaItem", gachaItem);//ガチャアイテム名を保存
    localStorage.setItem("gachaImg", gachaImg);//ガチャアイテム画像を保存
}

//-------------------ガチャここまで