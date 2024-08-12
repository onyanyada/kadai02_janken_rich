// リロード時
$(document).ready(function () {//DOMが読み込み終わった段階で以下発生
    const ScenarioSaved = localStorage.getItem('scenarioSaved');
    if (ScenarioSaved === 'true') {//これがないとscenarioもゲーム結果も表示されなくなる
        loadScenarioResults();
        loadScenarioOrder();
        localStorage.removeItem('scenarioSaved'); // フラグをリセット
    }
});