// ハードモードボタン
$('#hardBtn').click(function () {
    $('.hardtxt').text("ハードモード適用");
});

// シナリオ並び替え
$("#btn").click(function () {
    $('.endBtn').show();

    // ランダムイベントとスペシャルイベントの発生
    const scenarios = ["s1", "s2", "s3", "s4", "s5"];
    const randomEvent = Math.floor(Math.random() * 3);
    console.log(randomEvent);
    if (randomEvent == 0) {
        scenarios.push("s6");
    } else if (randomEvent == 1) {
        scenarios.push("s7");
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


// じゃんけん1ここから  
// 勝敗合計点数
let total = 0;
let hand = "";//変数用意
let judge = ""; //変数用意
let score1 = 0; //変数用意
let score2 = 0; //変数用意

// トータル計算
let totalfunc = () => {
    total = score1 + score2;
}

// ハードモード
$('#hardBtn').click(function () {
    totalfunc = () => {
        total = score1 + score2 - 2;
    }
});

//パーティー
// グーを選んだ時
$(".gu_btn1").on("click", function () {
    hand = '王子：フンッ悪役令嬢がまたやってやがる';
    judge = '普通';
    score1 = 0;

    totalfunc();

    //3.表示処理
    jankenView1();

});

// チョキを選んだ時
$(".cho_btn1").on("click", function () {
    hand = '王子：何を今さら、か弱い女を演じているんだ';
    judge = '幻滅';
    score1 = -1;

    totalfunc();

    //3.表示処理
    jankenView1();

});

// パーを選んだ時
$(".par_btn1").on("click", function () {
    hand = '王子：やるじゃねえか';
    judge = '好感';
    score1 = 1;
    totalfunc();


    //3.表示処理
    jankenView1();

});

//3.表示処理
const jankenView1 = () => {
    $(".pc_hands").html(hand);
    $(".judgment").html(judge);
    $(".score1").html(score1);
    $(".total1").text(total);
    localStorage.setItem("total", total); // totalの値を保存
}
//じゃんけん1ここまで



// じゃんけん2ここから  
// グーを選んだ時
$(".gu_btn2").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)


    //2.if分岐処理

    if (r == 1) {
        hand = '<img src="./img/gu.png" width="100px">';
        judge = 'あいこ';
        score2 = 0;
    }
    if (r == 2) {
        hand = '<img src="./img/choki.png" width="100px">';
        judge = '勝ち';
        score2 = 1;
    }
    if (r == 3) {
        hand = '<img src="./img/pa.png" width="100px">';
        judge = '負け';
        score2 = -1;
    }


    // total = score1 + score2;
    totalfunc();


    //3.表示処理
    jankenView2();


});

// チョキを選んだ時
$(".cho_btn2").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)

    //2.if分岐処理
    if (r == 1) {
        hand = '<img src="./img/gu.png" width="100px">';
        judge = '負け';
        score2 = -1;
    }
    if (r == 2) {
        hand = '<img src="./img/choki.png" width="100px">';
        judge = 'あいこ';
        score2 = 0;
    }
    if (r == 3) {
        hand = '<img src="./img/pa.png" width="100px">';
        judge = '勝ち';
        score2 = 1;

    }

    // total = score1 + score2;
    totalfunc();


    //3.表示処理
    jankenView2();


});

// パーを選んだ時
$(".par_btn2").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)
    //2.if分岐処理
    if (r == 1) {
        hand = '<img src="./img/gu.png" width="100px">';
        judge = '勝ち';
        score2 = 1;
    }
    if (r == 2) {
        hand = '<img src="./img/choki.png" width="100px">';
        judge = '負け';
        score2 = -1;
    }
    if (r == 3) {
        hand = '<img src="./img/pa.png" width="100px">';
        judge = 'あいこ';
        score2 = 0;
    }
    // total = score1 + score2;
    totalfunc();


    //3.表示処理
    jankenView2();


});

//3.表示処理
const jankenView2 = () => {
    $(".pc_hands").html(hand);
    $(".judgment").html(judge);
    $(".score2").html(score2);
    $(".total2").text(total);
    localStorage.setItem("total", total); // totalの値を保存
}

//じゃんけん2ここまで

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