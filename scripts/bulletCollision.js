const bulletCollision = () => {
    var bullet = document.querySelector("#bullet-id");
    bullet.emit("shoot-start");
    bullet.addEventListener('collide', bulletCollided);
};

const bulletCollided = event => {
    if (event.detail.body.el.className === 'rocks') 
    {
        console.log("hit rocks");
        event.detail.target.el.removeEventListener('collide', bulletCollided);

    }
    else if (event.detail.body.el.className === 'target') 
    {
        event.detail.target.el.removeEventListener('collide', bulletCollided);

        // Increment score and remove animal
        scoreIncrement();
        mainScene.removeChild(event.detail.body.el);

        // Create animal
        animalGenerator(1);

    }
};

// Start Script
document.onkeydown = event => {
    if (event.which == 32 && timeout == false) {
        bulletCollision();
    }
};