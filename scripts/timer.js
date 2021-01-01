var timeout = false;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeNow = minutes + ":" + seconds;
        display.setAttribute('text', 'value', timeNow);
        timer--;

        if (timer < 0) {

            // Time ended
            let gameover = document.createElement("a-plane");
            gameover.setAttribute("id", "gameover");
            gameover.setAttribute("position", "0 0 -1");
            gameover.setAttribute("width", "1");
            gameover.setAttribute("height", "0.5");
            gameover.setAttribute("color", "#cacaca");
            gameover.setAttribute("opacity", "30");
            gameover.setAttribute("shader", "flat");
            mainCamera.appendChild(gameover);

            let gameoverText = document.createElement("a-text");
            gameoverText.setAttribute("id", "gameover");
            gameoverText.setAttribute("value", "Game Over");
            gameoverText.setAttribute("width", "3");
            gameoverText.setAttribute("align", "center");
            gameoverText.setAttribute("shader", "flat");
            gameover.appendChild(gameoverText);

            timeout = true;
            clearInterval(interval);
        }
    }, 1000);
}

window.onload = function () {
    var gameplayTime = 3;
    var timerDisplay = document.querySelector('#timer-id');
    startTimer(gameplayTime, timerDisplay);
    walkAnimation();
};