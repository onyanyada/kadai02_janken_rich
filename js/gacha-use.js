let gachaEffect = 0;  // ガチャ効果を保存する変数

// ガチャアイテムを使うボタンをクリック
$('.gachaUseBtn').click(function () {
    $('.gachaUseBtn').addClass('gachaUsed');

    if (gachaItemGet === "異国の茶葉") {
        $('.gacha_option_btn').css('display', 'inline-block');
    }

    else if (gachaItemGet === "鍵") {
        $('.openLodTotal').css('display', 'block');
        $('.openLodTotal').html(`<div>ロッドの合計好感度は${totalL}点</div>`);
    }

    else if (gachaItemGet === "はずれ") {
        $('.openLodTotal').css('display', 'block');
        $('.openLodTotal').text("アイテムは一度しか使えません");

    }

    else if (gachaItemGet === "魔法を使える猫") {
        totalL += 1;  // ロッドの合計点数を1増やす
        updateLocalStorageTotal();  // 更新した値をローカルストレージに保存
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