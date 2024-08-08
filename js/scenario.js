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



let totalfunc = () => {
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
const scenarioResults = {
    s1: [
        { // グーを選んだ時の結果
            response: '王子「フンッ」',
            judge: '普通',
            scorePrince: 0,
            scoreL: 0,
        },
        { // チョキを選んだ時
            response: '王子「何を今さら、か弱い女を演じているんだ」',
            judge: '幻滅',
            scorePrince: -1,
            scoreL: -1,
        },
        { // パーを選んだ時
            response: '王子「やるじゃねえか」',
            judge: '好感',
            scorePrince: 1,
            scoreL: 1,
        },
    ],
    s2: [
        { // グーを選んだ時の結果
            response: '聖女に逃げられた',
            judge: '普通',
            scorePrince: 0,
            scoreL: 0,
        },
        { // チョキを選んだ時
            response: '王妃「うるさい蠅ね」',
            judge: '幻滅',
            scorePrince: -1,
            scoreL: -1,
        },
        { // パーを選んだ時
            response: '有利な世論を作り上げた',
            judge: '好感',
            scorePrince: 1,
            scoreL: 1,
        },
        { // 異国の茶葉を使ったとき
            response: '王妃「温室育ちと思いきや、意外とやるじゃない」',
            judge: '超好感',
            scorePrince: 2,
            scoreL: 2,
        },
    ],
    s3: [
        { // グーを選んだ時の結果
            response: '王子「悪女にしては聞き分けが良いな」',
            judge: '普通',
            scorePrince: 0,
            scoreL: 0,
        },
        { // チョキを選んだ時
            response: '王子「しつこい奴だ」',
            judge: '幻滅',
            scorePrince: -1,
            scoreL: -1,
        },
        { // パーを選んだ時
            response: '王子「おもしれー女」',
            judge: '好感',
            scorePrince: 1,
            scoreL: 1,
        },
    ],
    s4: [
        { // グーを選んだ時の結果
            response: '王妃「まあ、考えたじゃない」',
            judge: '普通',
            scorePrince: 0,
            scoreL: 0,
        },
        { // チョキを選んだ時
            response: '王子「フンッ悪女にしては頭が回るな」',
            judge: '幻滅',
            scorePrince: -1,
            scoreL: -1,
        },
        { // パーを選んだ時
            response: '王子「おもしれー女」',
            judge: '好感',
            scorePrince: 1,
            scoreL: 1,
        },
    ],
};

const result = ({ no, userHand }) => {
    const { response, judge, scorePrince, scoreL } = scenarioResults[`s${no}`][userHand];
    updateScore({ no, scorePrince, scoreL });
    resultView({ no, response, judge, scorePrince, totalPrince });
}

// グーを選んだ時
$(".gu_btn1").on("click", function () {
    result({ no: 1, userHand: 0 });
});

// チョキを選んだ時
$(".cho_btn1").on("click", function () {
    result({ no: 1, userHand: 1 });

});

// パーを選んだ時
$(".par_btn1").on("click", function () {
    result({ no: 1, userHand: 2 });

});


//s1----------------ここまで


// ----------------s2ここから

// グーを選んだ時
$(".gu_btn2").on("click", function () {
    result({ no: 2, userHand: 0 });
});

// チョキを選んだ時
$(".cho_btn2").on("click", function () {
    result({ no: 2, userHand: 1 });

});

// パーを選んだ時
$(".par_btn2").on("click", function () {
    result({ no: 2, userHand: 2 });

});

//異国の茶葉
$('.gacha_option_btn').on("click", function () {
    result({ no: 2, userHand: 3 });
});


// ----------------s2ここまで

// ----------------s3ここから
// グーを選んだ時
$(".gu_btn3").on("click", function () {
    result({ no: 3, userHand: 0 });
});

// チョキを選んだ時
$(".cho_btn3").on("click", function () {
    result({ no: 3, userHand: 1 });

});

// パーを選んだ時
$(".par_btn3").on("click", function () {
    result({ no: 3, userHand: 2 });

});

// ----------------s3ここまで


// ----------------s4ここから
$(".gu_btn4").on("click", function () {
    result({ no: 4, userHand: 0 });
});

// チョキを選んだ時
$(".cho_btn4").on("click", function () {
    result({ no: 4, userHand: 1 });

});

// パーを選んだ時
$(".par_btn4").on("click", function () {
    result({ no: 4, userHand: 2 });

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

