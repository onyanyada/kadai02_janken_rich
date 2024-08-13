
const totalLEnd = localStorage.getItem("totalL");
const totalLEndNumber = parseInt(totalLEnd);

$(".totalEndScore").text(totalLEnd);
if (totalLEndNumber >= 1) {
    $(".endtxt").text("ハッピーエンド");
} else if (totalLEndNumber === 0) {
    $(".endtxt").text("修道院");
} else if (totalLEndNumber < 0) {
    $(".endtxt").text("処刑");
}


