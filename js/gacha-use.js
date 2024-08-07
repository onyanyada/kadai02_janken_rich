$('.gachaUse').click(function () {
    $('.gachaUse').addClass('gachaUsed');
    if (gachaItemGet === "異国の茶葉") {
        $('.gacha_option_btn').css('display', 'block');
    }

    else if (gachaItemGet === "鍵") {
        $('.openLodTotal').css('display', 'block');
        $('.openLodTotal').html(`<div>ロッドの合計好感度は${totalL}点</div>`);
    }

    else if (gachaItemGet === "はずれ") {
        $('.openLodTotal').css('display', 'block');
        $('.openLodTotal').text("アイテムは使えません");

    }

    else if (gachaItemGet === "魔法を使える猫") {
        // totalfunc = () => {
        //     // 王子のトータル計算
        //     totalPrince = score1Prince + score2Prince + score3Prince + score4Prince + score5Prince;
        //     // ロッドのトータル計算
        //     totalL = score1L + score2L + score3L + score4L + score5L + 1;
        // }

    }

});