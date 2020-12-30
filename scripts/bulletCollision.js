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
        console.log("hit animal");
        event.detail.target.el.removeEventListener('collide', bulletCollided);

        // Remove Animal (temp)
        mainScene.removeChild(event.detail.body.el);
        scoreIncrement();
    }
};

// Start Script
document.onkeydown = event => {
    if (event.which == 32) {
        bulletCollision();
    }
};