// ハードモードボタン
$('#hardBtn').click(function () {
    $('.hardtxt').text("ハードモード適用");
});

// シナリオ並び替え
$("#btn").click(function () {
    $('.endBtn').show();

    // ランダムイベントとスペシャルイベントの発生
    const scenarios = ["s1", "s2", "s3"];
    const randomEvent = Math.floor(Math.random() * 3);
    console.log(randomEvent);
    if (randomEvent == 0) {
        scenarios.push("s4");
    } else if (randomEvent == 1) {
        scenarios.push("s5");
    } else if (randomEvent == 2) {
    }



    console.log(scenarios);
    const n = scenarios.length;//ループ5回実行確定させる
    for (let i = 0; i < n; i++) {
        // ランダムな数字を定数ranに入れる(配列の数の範囲で)
        const ran = Math.floor(Math.random() * scenarios.length);//0~4
        // console.log(ran); //spliceで重複が削除されるのでここで数字が被ってもOK

        // 配列の中からran番目の文字列を1つ定数vに入れる
        // spliceはfruitsからran番目の物を削除するので重複を避けられる
        const v = scenarios.splice(ran, 1);

        // scenarioというクラス名をもつdivを取り出し配列にする
        const scenarioArray = Array.from(document.getElementsByClassName("scenario"));
        // console.log(Array.isArray(scenarioArray));// 配列かチェック
        // console.log(scenarioArray);//div.u.scenarioなど5つが配列で出る

        // fruitsから取り出したvの名前をscenarioArrayの中身と形式を合わせる
        const classShow = `div.${v}.scenario`;
        // console.log(classShow);//div.u.scenarioなど1つずつループで回されて5つ出る

        // classShowに名前で一致するscenarioArrayの中身をmatchesメソッドで見つける
        const result = scenarioArray.find(item => item.matches(classShow));
        // console.log(result); //<div class="u scenario">u</div>がランダム順に5つ出る

        // <div class="u scenario">u</div>などを.showのhtmlに追加しdisplay:block;にする
        $('.show').append(result).children().addClass('mieru');//
    }
});


// シナリオここから  
// 勝敗合計点数
let total = 0;
let response = "";//変数用意
let judge = ""; //変数用意
let score1 = 0; //変数用意
let score2 = 0; //変数用意
let score3 = 0; //変数用意
let score4 = 0; //変数用意
let score5 = 0; //変数用意

// ガチャで取得したアイテムのスコア反映
const gachaReflect = localStorage.getItem("gachaScore");
// スコアを数字にする
const gachaNumber = parseInt(gachaReflect);

// トータル計算
let totalfunc = () => {
    total = score1 + score2 + score3 + score4 + score5 + gachaNumber;
}

// ハードモード
$('#hardBtn').click(function () {
    totalfunc = () => {
        total = score1 + score2 + score3 + score4 + score5 - 2;
    }
});

//s1ここから----------------
// グーを選んだ時
$(".gu_btn1").on("click", function () {
    response = '王子：フンッ悪役令嬢がまたやってやがる';
    judge = '普通';
    score1 = 0;

    totalfunc();

    //3.表示処理
    resultView1();

});

// チョキを選んだ時
$(".cho_btn1").on("click", function () {
    response = '王子：何を今さら、か弱い女を演じているんだ';
    judge = '幻滅';
    score1 = -1;

    totalfunc();

    //3.表示処理
    resultView1();

});

// パーを選んだ時
$(".par_btn1").on("click", function () {
    response = '王子：やるじゃねえか';
    judge = '好感';
    score1 = 1;
    totalfunc();


    //3.表示処理
    resultView1();

});

//3.表示処理
const resultView1 = () => {
    $(".pc_hands1").html(response);
    $(".judgment1").html(judge);
    $(".score1").html(score1);
    $(".total1").text(total);
    localStorage.setItem("total", total); // totalの値を保存
}

//s1----------------ここまで


// ----------------s2ここから
if (gachaNumber == -1) {
    $('.gacha_option_btn').css('display', 'block');
}

// グーを選んだ時
$(".gu_btn2").on("click", function () {
    response = '聖女に逃げられた';
    judge = '普通';
    score2 = 0;

    totalfunc();

    //3.表示処理
    resultView2();

});

// チョキを選んだ時
$(".cho_btn2").on("click", function () {
    response = '王妃「うるさい蠅ね」';
    judge = '幻滅';
    score2 = -1;

    totalfunc();

    //3.表示処理
    resultView2();

});

// パーを選んだ時
$(".par_btn2").on("click", function () {
    response = '有利な世論を作り上げた';
    judge = '好感';
    score2 = 1;
    totalfunc();


    //3.表示処理
    resultView2();

});

$('.gacha_option_btn').on("click", function () {
    response = '王妃「やるわね」';
    judge = '好感';
    score2 = 2;

    totalfunc();

    //3.表示処理
    resultView2();

});

//3.表示処理
const resultView2 = () => {
    $(".pc_hands2").html(response);
    $(".judgment2").html(judge);
    $(".score2").html(score2);
    $(".total2").text(total);
    localStorage.setItem("total", total); // totalの値を保存
}
// ----------------s2ここまで

// ----------------s3ここから
// グーを選んだ時
$(".gu_btn3").on("click", function () {
    response = '悪女にしては聞き分けが良いな';
    judge = '普通';
    score3 = 0;

    totalfunc();

    //3.表示処理
    resultView3();

});

// チョキを選んだ時
$(".cho_btn3").on("click", function () {
    response = 'しつこい奴だ';
    judge = '幻滅';
    score3 = -1;

    totalfunc();

    //3.表示処理
    resultView3();

});

// パーを選んだ時
$(".par_btn3").on("click", function () {
    response = 'おもしれー女';
    judge = '好感';
    score3 = 1;
    totalfunc();


    //3.表示処理
    resultView3();

});

//3.表示処理
const resultView3 = () => {
    $(".pc_hands3").html(response);
    $(".judgment3").html(judge);
    $(".score3").html(score3);
    $(".total3").text(total);
    localStorage.setItem("total", total); // totalの値を保存
}
// ----------------s3ここまで


// ----------------s4ここから
// グーを選んだ時
$(".gu_btn4").on("click", function () {
    response = '王妃「まあ、考えたじゃない」';
    judge = '普通';
    score3 = 1;

    totalfunc();

    //3.表示処理
    resultView4();

});

// チョキを選んだ時
$(".cho_btn4").on("click", function () {
    response = '王子「まあ、やるじゃないか」';
    judge = '好感';
    score3 = 2;

    totalfunc();

    //3.表示処理
    resultView4();

});

// パーを選んだ時
$(".par_btn4").on("click", function () {
    response = '王子「おもしれー女」';
    judge = '好感';
    score3 = 3;
    totalfunc();


    //3.表示処理
    resultView4();

});

//3.表示処理
const resultView4 = () => {
    $(".pc_hands4").html(response);
    $(".judgment4").html(judge);
    $(".score4").html(score3);
    $(".total4").text(total);
    localStorage.setItem("total", total); // totalの値を保存
}
// ----------------s4ここまで



// ----------------s5ランダムイベントここから  
// グーを選んだ時
$(".gu_btn5").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)


    //2.if分岐処理

    if (r == 1) {
        response = '<img src="./img/gu.png" width="100px">';
        judge = 'あいこ';
        score5 = 0;
    }
    if (r == 2) {
        response = '<img src="./img/choki.png" width="100px">';
        judge = '勝ち';
        score5 = 1;
    }
    if (r == 3) {
        response = '<img src="./img/pa.png" width="100px">';
        judge = '負け';
        score5 = -1;
    }

    totalfunc();


    //3.表示処理
    resultView5();


});

// チョキを選んだ時
$(".cho_btn5").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)

    //2.if分岐処理
    if (r == 1) {
        response = '<img src="./img/gu.png" width="100px">';
        judge = '負け';
        score5 = -1;
    }
    if (r == 2) {
        response = '<img src="./img/choki.png" width="100px">';
        judge = 'あいこ';
        score5 = 0;
    }
    if (r == 3) {
        response = '<img src="./img/pa.png" width="100px">';
        judge = '勝ち';
        score5 = 1;

    }

    totalfunc();


    //3.表示処理
    resultView5();


});

// パーを選んだ時
$(".par_btn5").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)
    //2.if分岐処理
    if (r == 1) {
        response = '<img src="./img/gu.png" width="100px">';
        judge = '勝ち';
        score5 = 1;
    }
    if (r == 2) {
        response = '<img src="./img/choki.png" width="100px">';
        judge = '負け';
        score5 = -1;
    }
    if (r == 3) {
        response = '<img src="./img/pa.png" width="100px">';
        judge = 'あいこ';
        score5 = 0;
    }
    totalfunc();


    //3.表示処理
    resultView5();


});

//3.表示処理
const resultView5 = () => {
    $(".pc_hands5").html(response);
    $(".judgment5").html(judge);
    $(".score5").html(score5);
    $(".total5").text(total);
    localStorage.setItem("total", total); // totalの値を保存
}

//-------------------s5ランダムイベントここまで

// エンディング
const totalw = localStorage.getItem("total");
$(".total2").text(totalw);
console.log(totalw);
if (totalw >= 1) {
    $(".endtxt").text("ハッピーエンド");
} else if (totalw == 0) {
    $(".endtxt").text("修道院");
} else if (totalw < 0) {
    $(".endtxt").text("処刑");
}