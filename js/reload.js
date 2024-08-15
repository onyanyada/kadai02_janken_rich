// リロード時
$(document).ready(function () {//DOMが読み込み終わった段階で以下発生
    const ScenarioSaved = localStorage.getItem('scenarioSaved');
    if (ScenarioSaved === 'true') {//これがないとscenarioもゲーム結果も表示されなくなる
        loadScenarioResults();
        loadScenarioOrder();
        loadBtnOrder();

        // リロード時に totalPrince と totalL を読み込む
        const savedTotalPrince = localStorage.getItem('totalPrince');
        const savedTotalL = localStorage.getItem('totalL');

        if (savedTotalPrince !== null) {
            totalPrinceSaved = parseInt(savedTotalPrince, 10); // 数値として扱うために変換
        }

        if (savedTotalL !== null) {
            totalLSaved = parseInt(savedTotalL, 10); // 数値として扱うために変換
        }

        //updateLocalStorageTotal();  // 更新した値をローカルストレージに保存
        totalfunc = () => {
            let tp = totalPrinceSaved;//王子の合計点
            let tl = totalLSaved;//ロッドの合計点
            const l = princeScores.length;
            for (let i = 0; i < l; i += 1) {
                // console.log(i, princeScores[i], scoresL[i])
                tp += princeScores[i];
                tl += scoresL[i];
            }
            totalPrince = tp;
            totalL = tl;
        };

        localStorage.removeItem('scenarioSaved'); // フラグをリセット
    }
});

// 次へボタンの取得表示
const loadBtnOrder = () => {
    // 保存したvArrayを取得
    const savedVArray = JSON.parse(localStorage.getItem("vArray"));
    // 保存したcurrentIndexを取得
    let savedCurrentIndex = parseInt(localStorage.getItem("currentIndex"));
    const slen = savedVArray.length;
    // 次へボタン機能 (修正なし)
    $('#nextScBtn').click(function () {
        if (savedCurrentIndex <= slen) {

            $('#nextScBtn').find('a').attr('href', `#c${savedVArray[savedCurrentIndex]}`);
            $(`#c${savedVArray[savedCurrentIndex]}`).addClass('pt80');
            console.log(savedCurrentIndex);
            savedCurrentIndex++;
            // インデックスをインクリメントして保存
            // localStorage.setItem("currentIndex", savedCurrentIndex);

            if (savedCurrentIndex === savedVArray.length) {
                $('#nextScBtn').hide();
                $('#goEndBtn').css('display', 'block');
            }
        }
    });

};
