function scoreIncrement(type)
{
    var scoreBoard = document.querySelector('#score-id');

    if (type == "#deer-id") score++;
    else if (type == "#horse-id") score += 2;
    else if (type == "#tiger-id") score += 3;

    scoreBoard.setAttribute("value", score);
};