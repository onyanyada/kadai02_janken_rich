// シナリオここから  
// 王子の点数
let totalPrince = 0;
let response = "";//変数用意
let judge = ""; //変数用意
let score1Prince = 0; //変数用意
let score2Prince = 0; //変数用意
let score3Prince = 0; //変数用意
let score4Prince = 0; //変数用意
let score5Prince = 0; //変数用意

// ロッドの点数
let totalL = 0;
let score1L = 0; //変数用意
let score2L = 0; //変数用意
let score3L = 0; //変数用意
let score4L = 0; //変数用意
let score5L = 0; //変数用意

// 王子のトータル計算
let totalfunc = () => {
    // 王子のトータル計算
    totalPrince = score1Prince + score2Prince + score3Prince + score4Prince + score5Prince;
    // ロッドのトータル計算
    totalL = score1L + score2L + score3L + score4L + score5L;

}

// ハードモード
$('#hardBtn').click(function () {
    totalfunc = () => {
        // 王子のトータル計算
        totalPrince = score1Prince + score2Prince + score3Prince + score4Prince + score5Prince - 5;
        // ロッドのトータル計算
        totalL = score1L + score2L + score3L + score4L + score5L - 5;
    }
});


//s1ここから----------------
// グーを選んだ時
$(".gu_btn1").on("click", function () {
    response = '王子「フンッ」';
    judge = '普通';
    score1Prince = 0;
    score1L = 0;

    totalfunc();

    //3.表示処理
    resultView1();

});

// チョキを選んだ時
$(".cho_btn1").on("click", function () {
    response = '王子「何を今さら、か弱い女を演じているんだ」';
    judge = '幻滅';
    score1Prince = -1;
    score1L = -1;

    totalfunc();

    //3.表示処理
    resultView1();

});

// パーを選んだ時
$(".par_btn1").on("click", function () {
    response = '王子「やるじゃねえか」';
    judge = '好感';
    score1Prince = 1;
    score1L = 1;
    totalfunc();


    //3.表示処理
    resultView1();

});

//3.表示処理
const resultView1 = () => {
    $(".pc_hands1").html(response);
    $(".judgment1").html(judge);
    $(".score1Prince").html(score1Prince);
    $(".total1Prince").text(totalPrince);
    localStorage.setItem("totalPrince", totalPrince); // totalの値を保存
    localStorage.setItem("totalL", totalL); // totalの値を保存
}

//s1----------------ここまで


// ----------------s2ここから


// グーを選んだ時
$(".gu_btn2").on("click", function () {
    response = '聖女に逃げられた';
    judge = '普通';
    score2Prince = 0;
    score2L = 0;

    totalfunc();

    //3.表示処理
    resultView2();

});

// チョキを選んだ時
$(".cho_btn2").on("click", function () {
    response = '王妃「うるさい蠅ね」';
    judge = '幻滅';
    score2Prince = -1;
    score2L = -1;

    totalfunc();

    //3.表示処理
    resultView2();

});

// パーを選んだ時
$(".par_btn2").on("click", function () {
    response = '有利な世論を作り上げた';
    judge = '好感';
    score2Prince = 1;
    score2L = 1;
    totalfunc();


    //3.表示処理
    resultView2();

});

$('.gacha_option_btn').on("click", function () {
    response = '王妃「やるわね」';
    judge = '好感';
    score2Prince = 2;
    score2L = 2;

    totalfunc();

    //3.表示処理
    resultView2();

});

//3.表示処理
const resultView2 = () => {
    $(".pc_hands2").html(response);
    $(".judgment2").html(judge);
    $(".score2Prince").html(score2Prince);
    $(".total2Prince").text(totalPrince);
    localStorage.setItem("totalPrince", totalPrince); // totalの値を保存
    localStorage.setItem("totalL", totalL); // totalの値を保存
}
// ----------------s2ここまで

// ----------------s3ここから
// グーを選んだ時
$(".gu_btn3").on("click", function () {
    response = '王子「悪女にしては聞き分けが良いな」';
    judge = '普通';
    score3Prince = 0;
    score3L = 0;

    totalfunc();

    //3.表示処理
    resultView3();

});

// チョキを選んだ時
$(".cho_btn3").on("click", function () {
    response = '王子「しつこい奴だ」';
    judge = '幻滅';
    score3Prince = -1;
    score3L = -1;

    totalfunc();

    //3.表示処理
    resultView3();

});

// パーを選んだ時
$(".par_btn3").on("click", function () {
    response = '王子「おもしれー女」';
    judge = '好感';
    score3Prince = 1;
    score3L = 1;
    totalfunc();


    //3.表示処理
    resultView3();

});

//3.表示処理
const resultView3 = () => {
    $(".pc_hands3").html(response);
    $(".judgment3").html(judge);
    $(".score3Prince").html(score3Prince);
    $(".total3Prince").text(totalPrince);
    localStorage.setItem("totalPrince", totalPrince); // totalの値を保存
    localStorage.setItem("totalL", totalL); // totalの値を保存
}
// ----------------s3ここまで


// ----------------s4ここから
// グーを選んだ時
$(".gu_btn4").on("click", function () {
    response = '王妃「まあ、考えたじゃない」';
    judge = '普通';
    score4Prince = 1;
    score4L = 1;

    totalfunc();

    //3.表示処理
    resultView4();

});

// チョキを選んだ時
$(".cho_btn4").on("click", function () {
    response = '王子「フンッ悪女にしては頭が回るな」';
    judge = '好感';
    score4Prince = 2;
    score4L = 2;

    totalfunc();

    //3.表示処理
    resultView4();

});

// パーを選んだ時
$(".par_btn4").on("click", function () {
    response = '王子「おもしれー女」';
    judge = '好感';
    score4Prince = 3;
    score4L = 3;
    totalfunc();


    //3.表示処理
    resultView4();

});

//3.表示処理
const resultView4 = () => {
    $(".pc_hands4").html(response);
    $(".judgment4").html(judge);
    $(".score4Prince").html(score4Prince);
    $(".total4Prince").text(totalPrince);
    localStorage.setItem("totalPrince", totalPrince); // totalの値を保存
    localStorage.setItem("totalL", totalL); // totalの値を保存
}
// ----------------s4ここまで



// ----------------s5ランダムイベントここから  
// グーを選んだ時
$(".gu_btn5").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)


    //2.if分岐処理

    if (r === 1) {
        response = 'ごくごく';
        judge = '普通';
        score5Prince = 0;
        score5L = 0;
    }
    if (r === 2) {
        response = 'ありがたく';
        judge = '好感';
        score5Prince = 1;
        score5L = 1;
    }
    if (r === 3) {
        response = '毒でも入ってるんじゃないか';
        judge = '幻滅';
        score5Prince = -1;
        score5L = -1;
    }

    totalfunc();


    //3.表示処理
    resultView5();


});

// チョキを選んだ時
$(".cho_btn5").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)

    //2.if分岐処理
    if (r === 1) {
        response = '毒でも入ってるんじゃないか';
        judge = '幻滅';
        score5Prince = -1;
        score5L = -1;
    }
    if (r === 2) {
        response = 'ごくごく';
        judge = '普通';
        score5Prince = 0;
        score5L = 0;
    }
    if (r === 3) {
        response = 'ありがたく';
        judge = '好感';
        score5Prince = 1;
        score5L = 1;

    }

    totalfunc();


    //3.表示処理
    resultView5();


});

// パーを選んだ時
$(".par_btn5").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)
    //2.if分岐処理
    if (r === 1) {
        response = 'ありがたく';
        judge = '好感';
        score5Prince = 1;
        score5L = 1;
    }
    if (r === 2) {
        response = '毒でも入ってるんじゃないか';
        judge = '幻滅';
        score5Prince = -1;
        score5L = -1;
    }
    if (r === 3) {
        response = 'ごくごく';
        judge = '普通';
        score5Prince = 0;
        score5L = 0;
    }
    totalfunc();


    //3.表示処理
    resultView5();


});

//3.表示処理
const resultView5 = () => {
    $(".pc_hands5").html(response);
    $(".judgment5").html(judge);
    $(".score5Prince").html(score5Prince);
    $(".total5Prince").text(totalPrince);
    localStorage.setItem("totalPrince", totalPrince); // totalの値を保存
    localStorage.setItem("totalL", totalL); // totalの値を保存
}

//-------------------s5ランダムイベントここまで

