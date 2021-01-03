function scoreIncrement(type)
{
    var scoreBoard = document.querySelector('#score-id');

    if (type == "#deer-id") score++;
    else if (type == "#horse-id") score += 2;
    else if (type == "#tiger-id") score += 3;
    else if (type == "#bear-id") score += 4;
    else if (type == "#elephant-id") score += 5;

    scoreBoard.setAttribute("value", score);
};