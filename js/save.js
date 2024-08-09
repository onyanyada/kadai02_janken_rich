
// セーブボタンクリック
$('#saveBtn').click(function () {
    alert('セーブしました');
    saveScenarioResults();
    saveScenarioOrder();
    localStorage.setItem('scenarioSaved', 'true'); // フラグを設定
});


// リロード時
$(document).ready(function () {
    const ScenarioSaved = localStorage.getItem('scenarioSaved');
    if (ScenarioSaved === 'true') {
        loadScenarioResults();
        loadScenarioOrder();
        localStorage.removeItem('scenarioSaved'); // フラグをリセット
    }
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

    }
};

// 各シナリオの順番を配列で保存
const saveScenarioOrder = () => {
    // 1.現在のクラス名の順番を配列でGET
    // scenarioというクラス名をもつdivを取り出し配列にする。この状態ではdivも含まれる
    const scenarioArray = Array.from(document.getElementsByClassName("scenario"));
    // 各要素のクラス名のみを取り出し配列にする
    // const scenarioClassArray = scenarioArray.map(scenario => scenario.className);
    const scenarioClassArray = scenarioArray.map(scenario => {

        return scenario.className.replace("mieru", "").trim();
    });


    // 以下と同じことをしている
    // const scenarioClassArray = Array.from(document.getElementsByClassName("scenario")).map(scenario => scenario.className);


    console.log(scenarioClassArray);//ここまでOK
    // 2.クラス名の配列を保存
    localStorage.setItem("scenarioClassArray", JSON.stringify(scenarioClassArray));
};


// 各シナリオを順番通りにhtmlに並べる
const loadScenarioOrder = () => {
    // 1.保存されたクラス名の配列を取得
    const scenarioClassArray = JSON.parse(localStorage.getItem("scenarioClassArray"));

    // 2.現在の追加する場所を空にする
    const container = document.querySelector('.show'); // 追加する場所を取得
    container.innerHTML = ''; // 既存のコンテンツをクリア


    // 2. それぞれのクラス名で<div>要素を作成し、HTMLに追加
    scenarioClassArray.forEach(className => {

        const classNameDiv = `<div class = "${className}"></div>`;
        // console.log(classNameDiv);//OK<div class = s4 scenario mieru></div>等が5つ出力

        // ↓できていないところ
        $('.show').append(classNameDiv);

        $('.show').append("わおん");//ができているので↑の書き方がおかしい？


    });
};

