const resetGame = () => 
{
    var gameplayTime = 300;
    var gameoverText = document.querySelector("#gameoverText");
    var scoreText = document.querySelector("#gameoverScore");
    var timerDisplay = document.querySelector('#timer-id');
    var scoreBoard = document.querySelector('#score-id');

    mainCamera.removeChild(gameoverText);
    mainCamera.removeChild(scoreText);

    timeout = false;
    score = 0;
    startTimer(gameplayTime, timerDisplay);
    scoreBoard.setAttribute("value", score);
}
