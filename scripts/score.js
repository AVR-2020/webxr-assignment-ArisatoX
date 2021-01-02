const scoreIncrement = () => {
    var scoreBoard = document.querySelector('#score-id');
    score++;
    scoreBoard.setAttribute("value", score);
};