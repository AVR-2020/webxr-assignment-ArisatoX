const resetGame = () => 
{
    var gameplayTime = 300;
    var gameoverText = document.querySelector("#gameoverText");
    var scoreText = document.querySelector("#gameoverScore");
    var replayButton = document.querySelector("#replayButton");
    var timerDisplay = document.querySelector('#timer-id');
    var scoreBoard = document.querySelector('#score-id');

    mainScene.removeChild(gameoverText);
    mainScene.removeChild(scoreText);
    mainScene.removeChild(replayButton);

    timeout = false;
    score = 0;
    startTimer(gameplayTime, timerDisplay);
    scoreBoard.setAttribute("value", score);
}
