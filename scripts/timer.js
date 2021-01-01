function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeNow = minutes + ":" + seconds;
        display.setAttribute('text', 'value', timeNow);
        timer--;

        if (timer < 0) {

            // Time ended
            // console.log("Time's up")
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var gameplayTime = 300;
    var timerDisplay = document.querySelector('#timer-id');
    startTimer(gameplayTime, timerDisplay);
    walkAnimation();
};