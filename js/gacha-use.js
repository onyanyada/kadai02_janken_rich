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
        totalfunc = () => {
            let tp = 0;//王子の合計点
            let tl = 1;//ロッドの合計点
            const l = princeScores.length;
            for (let i = 0; i < l; i += 1) {
                // console.log(i, princeScores[i], scoresL[i])
                tp += princeScores[i];
                tl += scoresL[i];
            }
            totalPrince = tp;
            totalL = tl;
        };

    }

});