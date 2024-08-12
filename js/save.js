// セーブボタンクリック
$('#saveBtn').click(function () {
    alert('セーブしました');
    saveScenarioResults();
    saveScenarioOrder();
    localStorage.setItem('scenarioSaved', 'true'); // フラグを設定
});


// クリアボタンclick
$('#clearBtn').click(function () {
    localStorage.clear();
    clearScenarioResults();
    location.reload();
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

// 各シナリオゲームの結果の保存データをhtmlから削除
const clearScenarioResults = () => {
    for (let i = 1; i <= 5; i++) {
        $(`.pc_hands${i}`).text('');
        $(`.judgment${i}`).text('');
        $(`.score${i}Prince`).text('');
        $(`.total${i}Prince`).text('');
        $(`.score${i}L`).text('');
        $(`.total${i}L`).text('');
    }
    $(".gachaImg").html('');
    $(".gachaItem").html('');
    $(".gachaExp").html('');
    $('.hardtxt').css('display', 'none');
};


// 各シナリオの順番を配列で保存
const saveScenarioOrder = () => {
    // 1.現在のクラス名の順番を配列でGET
    // scenarioというクラス名をもつdivを取り出し配列にする
    const scenarioOrders = Array.from(document.getElementsByClassName("scenario"));
    // console.log(scenarioOrders);//div.s2.scenario.mieruなどが順番順に5つ出る

    // 各要素から "mieru" クラスを削除
    scenarioOrders.forEach(scenario => {
        scenario.classList.remove("mieru");
    });

    // console.log(scenarioOrders); // div.s2.scenarioなどが順番順に5つ出る

    // 2.クラス名の配列を保存するため、クラス名だけを抽出する
    const classNamesArray = scenarioOrders.map(scenario => scenario.className);

    // console.log(classNamesArray); // s1 scenarioなどが順番順に5つ出る

    // 3.クラス名の配列を保存
    localStorage.setItem("classNamesArray", JSON.stringify(classNamesArray));

    // 注：以下の状態だとdiv要素なので空の配列としてlocalstorageに保存されてしまう
    // localStorage.setItem("scenarioOrders", JSON.stringify(scenarioOrders));

    // セーブをクリックしたときに各シナリオが消えないようにする
    scenarioOrders.forEach(scenario => {
        scenario.classList.add("mieru");
    });

};


// 各シナリオを順番通りにhtmlに並べる
const loadScenarioOrder = () => {
    // 1.保存されたクラス名の配列を取得
    const classNamesArray = JSON.parse(localStorage.getItem("classNamesArray"));
    // console.log(classNamesArray);// s1 scenarioなどが順番順に5つ出る

    // 2.scenarioというクラス名をもつdivを取り出し配列にする
    const scenarioGetAgain = Array.from(document.getElementsByClassName("scenario"));
    //console.log(scenarioGetAgain);//div.s2.scenario.mieruなどが順番順に5つ出る

    // 各要素から "mieru" クラスを削除
    scenarioGetAgain.forEach(scenario => {
        scenario.classList.remove("mieru");
    });
    //console.log(scenarioGetAgain); //div.s2.scenarioなどが順番順に5つ出る

    // 3.classNamesArrayに名前で一致するclassNamesGetAgainの中身をmatchesメソッドで見つける
    //しかしclassNamesArrayが配列なので、ひとつずつ取り出して比較したい
    const matchedElements = classNamesArray.map(className => {
        return scenarioGetAgain.find(item => item.matches(`.${className.split(' ').join('.')}`));
    });

    //find()メソッドは、条件に一致する最初の要素を返す
    //item.matches()メソッドは、要素が指定したCSSセレクタに一致するかどうかを確認
    //クラス名にはスペースが含まれているので、.split(' ').join('.') を使用して、
    //クエリセレクタとして有効な形式に変換（例: "s2 scenario" → ".s2.scenario"）


    //console.log(matchedElements); //div.s1.scenarioなどの形式で一致した要素が出力される
    // <div class="u scenario">中身</div>などを.showのhtmlに追加しdisplay: block; にする
    $('.show').append(matchedElements).children().addClass('mieru');

};

