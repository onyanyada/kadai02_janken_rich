
const video = document.getElementById("myVideo");


video.addEventListener("ended", function () {
    alert("動画が終了しました");
    $('.close-circle').show();
});

$('.close-circle').click(function () {
    $('.videoGachaBtn').show();
    $('.close-circle').hide();
    $('#myVideo').hide();
    localStorage.removeItem('clickedGacha');
});
