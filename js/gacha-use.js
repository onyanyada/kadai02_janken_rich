$('.gachaUse').click(function () {
    $('.gachaUse').addClass('gachaUsed');
    if (gachaItemGet === "異国の茶葉") {
        $('.gacha_option_btn').css('display', 'block');
    }

    if (gachaItemGet === "鍵") {
        $('.openLodTotal').css('display', 'block');
        $('.openLodTotal').html(`<div>ロッドの合計好感度は${totalL}点</div>`);
    }

});