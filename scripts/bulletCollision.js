const bulletCollision = () => {
    var bullet = document.querySelector("#bullet-id");
    bullet.emit("shoot-start");
    bullet.addEventListener('collide', bulletCollided);
};

const bulletCollided = event => {
    if (event.detail.body.el.id === 'horseAnimal') {
        console.log("hit horse");
        event.detail.target.el.removeEventListener('collide', bulletCollided);
    }

    if (event.detail.body.el.id === 'deerAnimal') {
        console.log("hit deer");
        event.detail.target.el.removeEventListener('collide', bulletCollided);
    }
};

// Start Script
document.onkeydown = event => {
    if (event.which == 32) {
        bulletCollision();
    }
};