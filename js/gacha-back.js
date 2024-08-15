$('#backStoryBtn').click(function () {
    if (ScenarioSaved === 'true') {//これがないとscenarioもゲーム結果も表示されなくなる
        loadScenarioResults();
        loadScenarioOrder();


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