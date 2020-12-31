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

        // Remove animal (temp)
        mainScene.removeChild(event.detail.body.el);
        scoreIncrement();

        // Add new animal
        const animal = document.createElement("a-entity");
        animal.setAttribute("class", "target");
        animal.setAttribute("dynamic-body", "linearDamping: 0.9; angularDamping: 0.9;");
        animal.setAttribute("random-position", "min: -25 0 -15; max: 20 0 25;");
        animal.setAttribute("scale", "0.3 0.3 0.3");
        animal.setAttribute("gltf-model", "#horse");
        mainScene.appendChild(animal);
    }
};

// Start Script
document.onkeydown = event => {
    if (event.which == 32) {
        bulletCollision();
    }
};