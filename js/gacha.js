// ----------------ガチャここから 
let gachaScore = 0; //変数用意
// グーを選んだ時
$(".gu_btn6").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)


    //2.if分岐処理

    if (r == 1) {
        imgItem = '<img src="./img/key.png" width="100px">';
        getItem = '鍵';
        gachaScore = 0;
    }
    if (r == 2) {
        imgItem = '<img src="./img/cha.png" width="100px">';
        getItem = '異国の茶葉';
        gachaScore = 1;
    }
    if (r == 3) {
        imgItem = '<img src="./img/maho.png" width="100px">';
        getItem = '魔法を使える猫';
        gachaScore = -1;
    }



    //3.表示処理
    resultView6();


});

// チョキを選んだ時
$(".cho_btn6").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)

    //2.if分岐処理
    if (r == 1) {
        imgItem = '<img src="./img/key.png" width="100px">';
        getItem = '鍵';
        gachaScore = -1;
    }
    if (r == 2) {
        imgItem = '<img src="./img/cha.png" width="100px">';
        getItem = '異国の茶葉';
        gachaScore = 0;
    }
    if (r == 3) {
        imgItem = '<img src="./img/maho.png" width="100px">';
        getItem = '魔法を使える猫';
        gachaScore = 1;

    }



    //3.表示処理
    resultView6();


});

// パーを選んだ時
$(".par_btn6").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)
    //2.if分岐処理
    if (r == 1) {
        imgItem = '<img src="./img/key.png" width="100px">';
        getItem = '鍵';
        gachaScore = 1;
    }
    if (r == 2) {
        imgItem = '<img src="./img/cha.png" width="100px">';
        getItem = '異国の茶葉';
        gachaScore = -1;
    }
    if (r == 3) {
        imgItem = '<img src="./img/maho.png" width="100px">';
        getItem = '魔法を使える猫';
        gachaScore = 0;
    }


    //3.表示処理
    resultView6();


});



//3.表示処理
const resultView6 = () => {
    $(".imgItem").html(imgItem);
    $(".getItem").html(getItem);
    localStorage.setItem("gachaScore", gachaScore); // ガチャの点数を保存
}

//-------------------ガチャここまで