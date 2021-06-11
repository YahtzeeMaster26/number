//trolled
var number = 0;
function gameLoop() {
    number += "x2";
    document.getElementById("number").innerHTML = number;
}

setInterval(gameLoop, 1000);