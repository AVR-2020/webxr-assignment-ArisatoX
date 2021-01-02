const gameoverText = () => {

    // Gameover text
    let textBox = document.createElement("a-plane");
    textBox.setAttribute("id", "gameoverText");
    textBox.setAttribute("position", "0 0.2 -1");
    textBox.setAttribute("shader", "flat");
    textBox.setAttribute("opacity", "0.1");
    textBox.setAttribute("width", "0.8");
    textBox.setAttribute("height", "0.2");
    mainCamera.appendChild(textBox);

    let gameoverText = document.createElement("a-text");
    gameoverText.setAttribute("value", "SELESAI");
    gameoverText.setAttribute("width", "3");
    gameoverText.setAttribute("align", "center");
    gameoverText.setAttribute("shader", "flat");
    textBox.appendChild(gameoverText);

    // Score text
    let textBox2 = document.createElement("a-plane");
    textBox2.setAttribute("id", "gameoverScore");
    textBox2.setAttribute("position", "0 -0.2 -1");
    textBox2.setAttribute("shader", "flat");
    textBox2.setAttribute("opacity", "0.1");
    textBox2.setAttribute("width", "0.8");
    textBox2.setAttribute("height", "0.2");
    mainCamera.appendChild(textBox2);

    let gameoverScore = document.createElement("a-text");
    gameoverScore.setAttribute("value", "Skor: " + score);
    gameoverScore.setAttribute("width", "3");
    gameoverScore.setAttribute("align", "center");
    gameoverScore.setAttribute("shader", "flat");
    textBox2.appendChild(gameoverScore);

}

