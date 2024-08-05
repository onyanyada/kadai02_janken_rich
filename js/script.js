// ハードモードボタン
$('#hardBtn').click(function () {
    $('.hardtxt').text("ハードモード適用");
});


$("#sss").click(function () {
    const fruits = ["u", "b", "c", "d", "e"];
    for (let i = 0; i < fruits.length; i++) {
        // console.log(fruits.length);//OK

        // ランダムな数字を定数ranに入れる(配列の数の範囲で)
        const ran = Math.floor(Math.random() * fruits.length);//0~4
        console.log(ran);//NG、同じ数が何回も出てしまう
        // すべての数字を一つずつランダムな順序で出力したい
        // https://www.youtube.com/watch?v=V5KCKbBo000&list=LL&index=38と同じことをしているのに
        // const v = fruits.splice(r,1); を使うと削除されループが3回で終わってしまう

        // 配列の中からran番目の文字列を定数vに入れる
        const v = fruits[ran];
        console.log(v);//OK

        // const className = document.getElementsByClassName("scenario");
        // console.log(className);
        // if (v == className) {
        //     //classNameのdivをshow();させたい
        //     $(`.{className}`).show();
        // }
    }
});


// ストーリー開始ボタン
$("#btn").click(function () {
    const a = [0, 1]
    const r = Math.floor(Math.random() * a.length);
    if (r == 0) {
        $('#janken1').show();
        $(".nextStory").show();
        $(".nextStory").click(function () {
            $('#janken1').hide();
            $('#janken2').show();
            $(".nextStory").click(function () {
                $('#janken2').hide();
                $('#end').show();
                $(".nextStory").hide();
            });
        });
    }
    if (r == 1) {
        $('#janken2').show();
        $(".nextStory").show();
        $(".nextStory").click(function () {
            $('#janken2').hide();
            $('#janken1').show();
            $(".nextStory").click(function () {
                $('#janken1').hide();
                $('#end').show();
                $(".nextStory").hide();
            });

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

    totalfunc();

    //3.表示処理
    jankenView1();
    // エンディング
    end();

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

    // total = score1 + score2;
    totalfunc();



    //3.表示処理
    jankenView1();
    // エンディング
    end();

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
    // total = score1 + score2;
    totalfunc();


    //3.表示処理
    jankenView1();
    // エンディング
    end();
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


    // total = score1 + score2;
    totalfunc();


    //3.表示処理
    jankenView2();
    // エンディング
    end();

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
    // エンディング
    end();

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

    // エンディング
    end();
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
const end = () => {
    if (total >= 1) {
        $(".endtxt").text("ハッピーエンド");
    } else if (total == 0) {
        $(".endtxt").text("修道院");
    } else if (total < 0) {
        $(".endtxt").text("処刑");
    }
}