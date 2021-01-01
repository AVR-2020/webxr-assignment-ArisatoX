// Testing for DB
var model = [
    "#horse",
    "#deer"
];

var scale = [
    "0.3 0.3 0.3",
    "0.1 0.1 0.1"
];

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

        // Remove animal
        mainScene.removeChild(event.detail.body.el);
        scoreIncrement();

        // Add new animal
        const animal = document.createElement("a-entity");
        var id = Math.floor(Math.random() * model.length);
        animal.setAttribute("class", "target");
        animal.setAttribute("dynamic-body", "linearDamping: 0.9; angularDamping: 0.9;");
        animal.setAttribute("random-position", "min: -20 0 -15; max: 20 0 20;");
        animal.setAttribute("gltf-model", model[id]);
        animal.setAttribute("scale", scale[id]);
        mainScene.appendChild(animal);
    }
};

// Start Script
document.onkeydown = event => {
    if (event.which == 32) {
        bulletCollision();
    }
};