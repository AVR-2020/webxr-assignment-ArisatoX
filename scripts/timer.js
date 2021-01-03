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
            var player = document.querySelector(".player");
            player.setAttribute("position", "0 1.6 -3.5");
            gameoverText();

            timeout = true;
            clearInterval(interval);
        }
    }, 1000);
}

function timerStart() {
    var gameplayTime = 300;
    var timerDisplay = document.querySelector('#timer-id');

    animalGenerator(5);
    startTimer(gameplayTime, timerDisplay);
    walkAnimation();
    main.play();
}

window.onload = function () {
    var title = document.querySelector("#title");
    var instruction = document.querySelector("#instructions");
    var startButton = document.querySelector("#start");

    startButton.addEventListener("click", function() {
        mainScene.removeChild(title);
        mainScene.removeChild(instruction);
        mainScene.removeChild(startButton);
        timeout = false;
        timerStart();
    });

};

