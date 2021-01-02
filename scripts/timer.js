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
            gameoverText();

            timeout = true;
            clearInterval(interval);
        }
    }, 1000);
}

function timerStart() {
    var gameplayTime = 300;
    var timerDisplay = document.querySelector('#timer-id');

    startTimer(gameplayTime, timerDisplay);
    walkAnimation();
    main.play();
}

window.onload = function () {
    var title = document.querySelector("#title");
    var instruction = document.querySelector("#instructions");
    var startButton = document.querySelector("#start");
    console.log(startButton)

    startButton.addEventListener("click", function() {
        mainScene.removeChild(title);
        mainScene.removeChild(instruction);
        mainScene.removeChild(startButton);
        timerStart();
    });

    animalGenerator(5);
};

