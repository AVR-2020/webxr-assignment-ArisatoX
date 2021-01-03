const gameoverText = () => {

    // Gameover text
    let textBox = document.createElement("a-plane");
    textBox.setAttribute("id", "gameoverText");
    textBox.setAttribute("position", "0 4 0");
    textBox.setAttribute("shader", "flat");
    textBox.setAttribute("opacity", "0.1");
    textBox.setAttribute("width", "3");
    textBox.setAttribute("height", "1");
    textBox.setAttribute("look-at", "#mainCamera");
    mainScene.appendChild(textBox);

    let gameoverText = document.createElement("a-text");
    gameoverText.setAttribute("value", "SELESAI");
    gameoverText.setAttribute("width", "10");
    gameoverText.setAttribute("align", "center");
    gameoverText.setAttribute("shader", "flat");
    textBox.appendChild(gameoverText);

    // Score text
    let textBox2 = document.createElement("a-plane");
    textBox2.setAttribute("id", "gameoverScore");
    textBox2.setAttribute("position", "0 1 0");
    textBox2.setAttribute("shader", "flat");
    textBox2.setAttribute("opacity", "0.1");
    textBox2.setAttribute("width", "3");
    textBox2.setAttribute("height", "1");
    textBox2.setAttribute("look-at", "#mainCamera");
    mainScene.appendChild(textBox2);

    let gameoverScore = document.createElement("a-text");
    gameoverScore.setAttribute("value", "Skor: " + score);
    gameoverScore.setAttribute("width", "10");
    gameoverScore.setAttribute("align", "center");
    gameoverScore.setAttribute("shader", "flat");
    textBox2.appendChild(gameoverScore);

    // Replay button
    let textBox3 = document.createElement("a-plane");
    textBox3.setAttribute("id", "replayButton");
    textBox3.setAttribute("position", "0 2.5 0");
    textBox3.setAttribute("shader", "flat");
    textBox3.setAttribute("opacity", "0.1");
    textBox3.setAttribute("width", "3");
    textBox3.setAttribute("height", "1");
    textBox3.setAttribute("look-at", "#mainCamera");
    mainScene.appendChild(textBox3);

    let replayText = document.createElement("a-text");
    replayText.setAttribute("value", "ULANG");
    replayText.setAttribute("width", "10");
    replayText.setAttribute("align", "center");
    replayText.setAttribute("shader", "flat");
    textBox3.appendChild(replayText);

    textBox3.addEventListener("click", function() {
        resetGame()
    });

}

