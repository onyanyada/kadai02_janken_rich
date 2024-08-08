// ガチャアイテムを使うボタンをクリック
$('.gachaUse').click(function () {
    $('.gachaUse').addClass('gachaUsed');
    if (gachaItemGet === "異国の茶葉") {
        $('.gacha_option_btn').css('display', 'inline-block');
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
        totalL += 1;  // ロッドの合計点数を1増やす
        updateLocalStorageTotal();  // 更新した値をローカルストレージに保存
    }

});