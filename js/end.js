// ローカルストレージから合計点数をGET
const totalPrinceEnd = localStorage.getItem("totalPrince");
const totalLEnd = localStorage.getItem("totalL");

const totalPrinceEndNumber = parseInt(totalPrinceEnd);
const totalLEndNumber = parseInt(totalLEnd);

$(".chosePrince").click(function () {
    $('#end').show();
    $(".totalEndScore").text(totalPrinceEnd);
    if (totalPrinceEndNumber >= 1) {
        $(".endtxt").text("ハッピーエンド");
    } else if (totalPrinceEndNumber === 0) {
        $(".endtxt").text("修道院");
    } else if (totalPrinceEndNumber < 0) {
        $(".endtxt").text("処刑");
    }
});

$(".choseL").click(function () {
    $('#end').show();
    $(".totalEndScore").text(totalLEnd);
    if (totalLEndNumber >= 1) {
        $(".endtxt").text("ハッピーエンド");
    } else if (totalLEndNumber === 0) {
        $(".endtxt").text("修道院");
    } else if (totalLEndNumber < 0) {
        $(".endtxt").text("処刑");
    }
});




$('#repeat').click(function () {
    localStorage.removeItem("gachaItem"); //gachaItemという値を削除
    localStorage.removeItem("gachaImg"); //gachaImgという値を削除
    localStorage.removeItem("gachaExp"); //gachaExpという値を削除
    localStorage.removeItem("gachaScore"); //gachaScoreという値を削除
    localStorage.removeItem("totalPrince");//totalという値を削除
    localStorage.removeItem("totalL");//totalという値を削除
});