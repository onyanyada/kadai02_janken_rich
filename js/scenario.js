// シナリオここから  

let response = "";//王子の反応
let judge = ""; //王子のジャッジ

// 王子の点数
let totalPrince = 0;//王子の合計点数
let princeScores = [0, 0, 0, 0, 0];//王子の各回の点数の配列
let scorePrince = 0;//王子の各回の点数

// ロッドの点数
let totalL = 0;//ロッドの合計点数
let scoresL = [0, 0, 0, 0, 0];//ロッドの各回の点数の配列
let scoreL = 0;//ロッドの各回の点数

// 各シナリオのスコア
const updateScore = ({ no, scorePrince, scoreL }) => {
    const index = no - 1;
    princeScores[index] = scorePrince;
    scoresL[index] = scoreL;
    totalfunc();
};



const totalfunc = () => {
    let tp = 0;//王子の合計点
    let tl = 0;//ロッドの合計点
    const l = princeScores.length;
    for (let i = 0; i < l; i += 1) {
        // console.log(i, princeScores[i], scoresL[i])
        tp += princeScores[i];
        tl += scoresL[i];
    }
    totalPrince = tp;
    totalL = tl;
};


// totalのローカルストレージ保存
const updateLocalStorageTotal = () => {
    localStorage.setItem("totalPrince", totalPrince); // 王子のtotalの値を保存
    localStorage.setItem("totalL", totalL); // ロッドのtotalの値を保存
}

//結果表示
const resultView = ({
    no, // シナリオの番号
    response,
    judge,
    scorePrince,
    totalPrince,
}) => {
    $(`.pc_hands${no}`).html(response);
    $(`.judgment${no}`).html(judge);
    $(`.score${no}Prince`).html(scorePrince);
    $(`.total${no}Prince`).text(totalPrince);
    updateLocalStorageTotal();
};




//s1ここから----------------
// グーを選んだ時
$(".gu_btn1").on("click", function () {
    response = '王子「フンッ」';
    judge = '普通';

    scorePrince = 1;
    scoreL = 0;

    updateScore({ no: 1, scorePrince: 1, scoreL: 0 });

    //3.表示処理
    // 呼び出し
    resultView({
        no: 1,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// チョキを選んだ時
$(".cho_btn1").on("click", function () {
    response = '王子「何を今さら、か弱い女を演じているんだ」';
    judge = '幻滅';
    scorePrince = -1;
    scoreL = -1;
    updateScore({ no: 1, scorePrince: -1, scoreL: -1 });

    //3.表示処理
    // 呼び出し
    resultView({
        no: 1,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// パーを選んだ時
$(".par_btn1").on("click", function () {
    response = '王子「やるじゃねえか」';
    judge = '好感';
    scorePrince = 1;
    scoreL = 1;
    updateScore({ no: 1, scorePrince: 1, scoreL: 1 });


    //3.表示処理
    // 呼び出し
    resultView({
        no: 1,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});


//s1----------------ここまで


// ----------------s2ここから


// グーを選んだ時
$(".gu_btn2").on("click", function () {
    response = '聖女に逃げられた';
    judge = '普通';
    scorePrince = 0;
    scoreL = 0;
    updateScore({ no: 2, scorePrince: 0, scoreL: 0 });

    //3.表示処理
    // 呼び出し
    resultView({
        no: 2,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// チョキを選んだ時
$(".cho_btn2").on("click", function () {
    response = '王妃「うるさい蠅ね」';
    judge = '幻滅';
    scorePrince = -1;
    scoreL = -1;
    updateScore({ no: 2, scorePrince: -1, scoreL: -1 });

    //3.表示処理
    // 呼び出し
    resultView({
        no: 2,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// パーを選んだ時
$(".par_btn2").on("click", function () {
    response = '有利な世論を作り上げた';
    judge = '好感';
    scorePrince = 1;
    scoreL = 1;
    updateScore({ no: 2, scorePrince: 1, scoreL: 1 });


    //3.表示処理
    // 呼び出し
    resultView({
        no: 2,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

$('.gacha_option_btn').on("click", function () {
    response = '王妃「やるわね」';
    judge = '好感';
    scorePrince = 2;
    scoreL = 2;
    updateScore({ no: 2, scorePrince: 2, scoreL: 2 });


    totalfunc();
    //3.表示処理
    // 呼び出し
    resultView({
        no: 2,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});


// ----------------s2ここまで

// ----------------s3ここから
// グーを選んだ時
$(".gu_btn3").on("click", function () {
    response = '王子「悪女にしては聞き分けが良いな」';
    judge = '普通';
    scorePrince = 0;
    scoreL = 0;
    updateScore({ no: 3, scorePrince: 0, scoreL: 0 });

    //3.表示処理
    // 呼び出し
    resultView({
        no: 3,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// チョキを選んだ時
$(".cho_btn3").on("click", function () {
    response = '王子「しつこい奴だ」';
    judge = '幻滅';
    scorePrince = -1;
    scoreL = -1;
    updateScore({ no: 3, scorePrince: -1, scoreL: -1 });

    //3.表示処理
    // 呼び出し
    resultView({
        no: 3,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// パーを選んだ時
$(".par_btn3").on("click", function () {
    response = '王子「おもしれー女」';
    judge = '好感';
    scorePrince = 1;
    scoreL = 1;
    updateScore({ no: 3, scorePrince: 1, scoreL: 1 });

    //3.表示処理
    // 呼び出し
    resultView({
        no: 3,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// ----------------s3ここまで


// ----------------s4ここから
// グーを選んだ時
$(".gu_btn4").on("click", function () {
    response = '王妃「まあ、考えたじゃない」';
    judge = '普通';
    scorePrince = 1;
    scoreL = 1;
    updateScore({ no: 4, scorePrince: 1, scoreL: 1 });


    //3.表示処理
    // 呼び出し
    resultView({
        no: 4,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// チョキを選んだ時
$(".cho_btn4").on("click", function () {
    response = '王子「フンッ悪女にしては頭が回るな」';
    judge = '好感';
    scorePrince = 2;
    scoreL = 2;
    updateScore({ no: 4, scorePrince: 2, scoreL: 2 });

    //3.表示処理
    // 呼び出し
    resultView({
        no: 4,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// パーを選んだ時
$(".par_btn4").on("click", function () {
    response = '王子「おもしれー女」';
    judge = '好感';
    scorePrince = 3;
    scoreL = 3;
    updateScore({ no: 4, scorePrince: 3, scoreL: 3 });


    //3.表示処理
    // 呼び出し
    resultView({
        no: 4,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });

});

// ----------------s4ここまで



// ----------------s5ランダムイベントここから  
// グーを選んだ時
$(".gu_btn5").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)


    //2.if分岐処理

    if (r === 1) {
        response = 'ごくごく';
        judge = '普通';
        scorePrince = 0;
        scoreL = 0;
        updateScore({ no: 5, scorePrince: 0, scoreL: 0 });

    }
    if (r === 2) {
        response = 'ありがたく';
        judge = '好感';
        scorePrince = 1;
        scoreL = 1;
        updateScore({ no: 5, scorePrince: 1, scoreL: 1 });
    }
    if (r === 3) {
        response = '毒でも入ってるんじゃないか';
        judge = '幻滅';
        scorePrince = -1;
        scoreL = -1;
        updateScore({ no: 5, scorePrince: -1, scoreL: -1 });
    }



    //3.表示処理
    // 呼び出し
    resultView({
        no: 5,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });


});

// チョキを選んだ時
$(".cho_btn5").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)

    //2.if分岐処理
    if (r === 1) {
        response = '毒でも入ってるんじゃないか';
        judge = '幻滅';
        scorePrince = -1;
        scoreL = -1;
        updateScore({ no: 5, scorePrince: -1, scoreL: -1 });
    }
    if (r === 2) {
        response = 'ごくごく';
        judge = '普通';
        scorePrince = 0;
        scoreL = 0;
        updateScore({ no: 5, scorePrince: 0, scoreL: 0 });
    }
    if (r === 3) {
        response = 'ありがたく';
        judge = '好感';
        scorePrince = 1;
        scoreL = 1;
        updateScore({ no: 5, scorePrince: 1, scoreL: 1 });
    }



    //3.表示処理
    // 呼び出し
    resultView({
        no: 5,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });


});

// パーを選んだ時
$(".par_btn5").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)
    //2.if分岐処理
    if (r === 1) {
        response = 'ありがたく';
        judge = '好感';
        scorePrince = 1;
        scoreL = 1;
        updateScore({ no: 5, scorePrince: 1, scoreL: 1 });
    }
    if (r === 2) {
        response = '毒でも入ってるんじゃないか';
        judge = '幻滅';
        scorePrince = -1;
        scoreL = -1;
        updateScore({ no: 5, scorePrince: -1, scoreL: -1 });

    }
    if (r === 3) {
        response = 'ごくごく';
        judge = '普通';
        scorePrince = 0;
        scoreL = 0;
        updateScore({ no: 5, scorePrince: 0, scoreL: 0 });
    }



    //3.表示処理
    // 呼び出し
    resultView({
        no: 5,
        response: response,
        judge: judge,
        scorePrince: scorePrince,
        totalPrince: totalPrince,
    });


});

//-------------------s5ランダムイベントここまで

