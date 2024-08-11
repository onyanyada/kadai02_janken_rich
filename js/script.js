// ハードモードボタン
// $('#hardBtn').click(function () {
//     $('.hardtxt').text("ハードモード適用");
// });


// シナリオ並び替え
// ランダムイベントとスペシャルイベントの発生
const scenarios = ["s1", "s2", "s3"];
const randomEvent = Math.floor(Math.random() * 3);
// console.log(randomEvent);
if (randomEvent == 0) {
    scenarios.push("s4");
    scenarios.push("s5");
} else if (randomEvent == 1) {
    scenarios.push("s4");
    scenarios.push("s5");
} else if (randomEvent == 2) {
    scenarios.push("s4");
    scenarios.push("s5");
}

const n = scenarios.length;//ループ5回実行確定させる
// まず、vを格納する配列を作成
const vArray = [];
for (let i = 0; i < n; i++) {
    // ランダムな数字を定数ranに入れる(配列の数の範囲で)
    const ran = Math.floor(Math.random() * scenarios.length);//0~4
    // console.log(ran); //spliceで重複が削除されるのでここで数字が被ってもOK

    // 配列の中からran番目の文字列を1つ定数vに入れる
    // spliceはfruitsからran番目の物を削除するので重複を避けられる
    const v = scenarios.splice(ran, 1);

    vArray.push(v); // vを配列に追加


    // scenarioというクラス名をもつdivを取り出し配列にする
    const scenarioArray = Array.from(document.getElementsByClassName("scenario"));
    // console.log(Array.isArray(scenarioArray));// 配列かチェック
    // console.log(scenarioArray);//div.u.scenarioなど5つが配列で出る

    // scenariosから取り出したvの名前をscenarioArrayの中身と形式を合わせる
    const classShow = `div.${v}.scenario`;
    //console.log(classShow);//div.s1.scenarioなど1つずつループで回されて5つ出る

    // classShowに名前で一致するscenarioArrayの中身をmatchesメソッドで見つける
    const result = scenarioArray.find(item => item.matches(classShow));
    //console.log(result); //<div class="s1 scenario">中身</div>がランダム順に5つ出る

    // <div class="u scenario">u</div>などを.showのhtmlに追加しdisplay:block;にする
    $('.show').append(result).children().addClass('mieru');//

}
// console.log(vArray);



// 次へボタン機能
// 現在のリンク番号を追跡するためのインデックスを定義
// vArray[1]から順に使いたいので初期値を1にしている
// 最初のvArray[0]はすでに表示されている
let currentIndex = 1;
$('#nextScBtn').click(function () {
    // vArrayから順番にvを取得
    if (currentIndex <= vArray.length) {//5以下の場合:1～5の場合
        $('#nextScBtn').find('a').attr('href', `#c${vArray[currentIndex]}`);
        //↑vArray[1]→vArray[2]…の順番で使う
        $(`#c${vArray[currentIndex]}`).addClass('pt80');
        // console.log(currentIndex);
        // console.log(`#c${vArray[currentIndex]}`);
        currentIndex++;//次のクリック時には次のvを使う

        if (currentIndex === vArray.length) {//5の場合
            $('#nextScBtn').hide();
            $('#goEndBtn').css('display', 'block');
        }
    }
});



// ガチャをストーリーに反映
// ガチャで取得したアイテム名反映
const gachaItemGet = localStorage.getItem("gachaItem");
// ガチャで取得したアイテム画像反映
const gachaImgGet = localStorage.getItem("gachaImg");
// ガチャで取得したアイテムのスコア反映
const gachaScoreGet = localStorage.getItem("gachaScore");
// スコアを数字にする
const gachaNumber = parseInt(gachaScoreGet);
//ガチャで取得したアイテム説明を反映
const gachaExpGet = localStorage.getItem("gachaExp");

$('.gachaItem').text(gachaItemGet);
$('.gachaImg').html(gachaImgGet);
$('.gachaExp').html(gachaExpGet);