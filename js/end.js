// エンディング
const totalw = localStorage.getItem("total");
$(".total2").text(totalw);
console.log(totalw);
if (totalw >= 1) {
    $(".endtxt").text("ハッピーエンド");
} else if (totalw === 0) {
    $(".endtxt").text("修道院");
} else if (totalw < 0) {
    $(".endtxt").text("処刑");
}

$('#repeat').click(function () {
    localStorage.removeItem("gachaItem"); //gachaItemという値を削除
    localStorage.removeItem("gachaImg"); //gachaImgという値を削除
    localStorage.removeItem("gachaExp"); //gachaExpという値を削除
    localStorage.removeItem("gachaScore"); //gachaScoreという値を削除
    localStorage.removeItem("total");//totalという値を削除
});