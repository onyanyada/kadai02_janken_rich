// alert(11111);
// ストーリー開始ボタン
$(".btn").click(function () {
    const a = [0, 1]
    const r = Math.floor(Math.random() * a.length);
    if (r == 0) {
        $('#janken1').show();
        $(".nextStory").click(function () {
            $('#janken1').hide();
            $('#janken2').show();
        });
    }
    if (r == 1) {
        $('#janken2').show();
        $(".nextStory").click(function () {
            $('#janken2').hide();
            $('#janken1').show();
        });
    }
});


// じゃんけん1ここから  
// 勝敗合計点数
let total = 0;
let hand = "";//変数用意
let judge = ""; //変数用意
let score1 = 0; //変数用意
let score2 = 0; //変数用意


// グーを選んだ時
$(".gu_btn1").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)


    //2.if分岐処理

    if (r == 1) {
        hand = '<img src="./img/gu.png" width="100px">';
        judge = 'あいこ';
        score1 = 0;
    }
    if (r == 2) {
        hand = '<img src="./img/choki.png" width="100px">';
        judge = '勝ち';
        score1 = 1;
    }
    if (r == 3) {
        hand = '<img src="./img/pa.png" width="100px">';
        judge = '負け';
        score1 = -1;
    }


    total = score1;


    //3.表示処理
    jankenView1();

});

// チョキを選んだ時
$(".cho_btn1").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)

    //2.if分岐処理
    if (r == 1) {
        hand = '<img src="./img/gu.png" width="100px">';
        judge = '負け';
        score1 = -1;
    }
    if (r == 2) {
        hand = '<img src="./img/choki.png" width="100px">';
        judge = 'あいこ';
        score1 = 0;
    }
    if (r == 3) {
        hand = '<img src="./img/pa.png" width="100px">';
        judge = '勝ち';
        score1 = 1;

    }

    total = score1;


    //3.表示処理
    jankenView1();

});

// パーを選んだ時
$(".par_btn1").on("click", function () {
    const r = Math.ceil(Math.random() * 3);//1.乱数(1~3)
    //2.if分岐処理
    if (r == 1) {
        hand = '<img src="./img/gu.png" width="100px">';
        judge = '勝ち';
        score1 = 1;
    }
    if (r == 2) {
        hand = '<img src="./img/choki.png" width="100px">';
        judge = '負け';
        score1 = -1;
    }
    if (r == 3) {
        hand = '<img src="./img/pa.png" width="100px">';
        judge = 'あいこ';
        score1 = 0;
    }
    total = score1;


    //3.表示処理
    jankenView1();
});

//3.表示処理
const jankenView1 = () => {
    $(".pc_hands").html(hand);
    $(".judgment").html(judge);
    $(".score1").html(score1);
    $(".total1").text(total);
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


    total = score1 + score2;


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

    total = score1 + score2;


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
    total = score1 + score2;


    //3.表示処理
    jankenView2();
});

//3.表示処理
const jankenView2 = () => {
    $(".pc_hands").html(hand);
    $(".judgment").html(judge);
    $(".score2").html(score2);
    $(".total2").text(total);
}

//じゃんけん2ここまで

// エンディング
const endtxt = '';
if (total >= 1) {
    $(".endtxt").text("ハッピーエンド");
} else if (total === 0) {
    $(".endtxt").text("修道院");
} else if (total < 0) {
    $(".endtxt").text("処刑");
}
