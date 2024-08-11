// ハードモード適用
$('#hardBtn').click(function () {
    localStorage.setItem('hardMode', 'on');
});

$(document).ready(function () {//DOMが読み込み終わった段階で以下発生
    if (localStorage.getItem('hardMode') === 'on') {
        $('.hardtxt').text("ハードモード適用中");
        $('.hardtxt').addClass('hardModeOn');
        totalfunc = () => {
            let tp = -1;//王子の合計点
            let tl = -1;//ロッドの合計点
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
