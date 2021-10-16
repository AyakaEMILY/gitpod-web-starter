let startiButton = document.getElementById("start-button");
let result = document.getElementById("result");

let time = 0;

function tick() {
  time = time + 1;
  result.textContent = time;
}

function start() {
  setInterval(tick, 1000);
  //数字を記入する関数を”関数”に入れる
}

let startButton = document.getElementById("start-button");
startButton.onclick = start;
