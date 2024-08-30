
    let number = 0;
    let data = []; 
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
    // ajax.jsonからデータを取得する処理
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            data = request.response; // 取得したデータを保存
        }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
}

function changeVideo() {
    if (data.length === 0) {
        // データがまだ取得されていない場合のみ、データを取得
        getData();
    }

    button.addEventListener('click', () => {
        if (data.length > 0) { // データが取得されている場合のみ処理を実行
            titleArea.innerHTML = data[number].title;
            contentArea.innerHTML = data[number].content;
            videoArea.setAttribute("src", data[number].url);
            number = (number + 1) % data.length; // numberの値をデータの長さに応じて循環
        }
    });
}

window.onload = changeVideo;