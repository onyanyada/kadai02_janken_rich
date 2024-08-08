


$('#saveBtn').click(function () {
    alert('セーブしました');
    saveScenarioResults();
    loadScenarioResults();
});

// 各シナリオゲームの結果の保存
const saveScenarioResults = () => {
    for (let i = 1; i <= 5; i++) {
        const save_pc_hands = $(`.pc_hands${i}`).text();
        const save_judgment = $(`.judgment${i}`).text();
        const save_scorePrince = $(`.score${i}Prince`).text();
        const save_totalPrince = $(`.total${i}Prince`).text();
        const save_scoreL = $(`.score${i}L`).text();
        const save_totalL = $(`.total${i}L`).text();

        // console.log(save_pc_hands);
        // console.log(save_judgment);
        // console.log(save_scorePrince);
        // console.log(save_totalPrince);
        // console.log(save_scoreL);
        // console.log(save_totalL);

        localStorage.setItem(`pc_hands${i}`, save_pc_hands);
        localStorage.setItem(`judgment${i}`, save_judgment);
        localStorage.setItem(`score${i}Prince`, save_scorePrince);
        localStorage.setItem(`total${i}Prince`, save_totalPrince);
        localStorage.setItem(`score${i}L`, save_scoreL);
        localStorage.setItem(`total${i}L`, save_totalL);
    }
};

// 各シナリオゲームの結果の保存データ取得表示
const loadScenarioResults = () => {
    for (let i = 1; i <= 5; i++) {
        const load_pc_hands = localStorage.getItem(`pc_hands${i}`);
        const load_judgment = localStorage.getItem(`judgment${i}`);
        const load_scorePrince = localStorage.getItem(`score${i}Prince`);
        const load_totalPrince = localStorage.getItem(`total${i}Prince`);
        const load_scoreL = localStorage.getItem(`score${i}L`);
        const load_totalL = localStorage.getItem(`total${i}L`);

        $(`.pc_hands${i}`).text(load_pc_hands);
        $(`.judgment${i}`).text(load_judgment);
        $(`.score${i}Prince`).text(load_scorePrince);
        $(`.total${i}Prince`).text(load_totalPrince);
        $(`.score${i}L`).text(load_scoreL);
        $(`.total${i}L`).text(load_totalL);

        console.log(load_pc_hands);
    }

    // 最小限のコードで試したが、出来なかった方法↓
    if (localStorage.getItem("pc_hands1")) {
        const load_pc_hands = localStorage.getItem("pc_hands1");
        $(".pc_hands1").text(load_pc_hands);
    }//クラス名s1：パーティーでライバルに嫌味を言われたのスコアを出し、試したができない
    // ラーニングシステム【JavaScript】(実習)メモパッドを作ってみようと同じ方法でやっている


};



