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

            // Game Over
            let gameoverText = document.createElement("a-text");
            gameoverText.setAttribute("id", "gameover");
            gameoverText.setAttribute("value", "GAME OVER");
            gameoverText.setAttribute("width", "3");
            gameoverText.setAttribute("align", "center");
            gameoverText.setAttribute("shader", "flat");
            gameoverText.setAttribute("position", "0 0.2 -1");
            mainCamera.appendChild(gameoverText);

            timeout = true;
            clearInterval(interval);
        }
    }, 1000);
}

window.onload = function () {
    var gameplayTime = 300;
    var timerDisplay = document.querySelector('#timer-id');
    startTimer(gameplayTime, timerDisplay);
    walkAnimation();
};