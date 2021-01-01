// Testing for DB
var model = [
    "#horse",
    "#deer"
];

var scale = [
    "0.3 0.3 0.3",
    "0.1 0.1 0.1"
];

var id_list = [
    "horse-id",
    "deer-id"
]

var minus = [
    1,
    -1
]

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
        
        // Randomizer for position
        var x = Math.floor(Math.random() * 20);
        var z = Math.floor(Math.random() * 20);

        var randomizerMinus = Math.floor(Math.random() * minus.length);
        x = x * minus[randomizerMinus];
        z = z * minus[randomizerMinus];

        var positionNow = x + " 0 " + z;
        console.log(positionNow);

        // Randomizer for animal id
        var randomizer = Math.floor(Math.random() * model.length);

        // Create animal
        let animal = document.createElement("a-entity");
        animal.setAttribute("class", "target");
        animal.setAttribute("position", positionNow);
        animal.setAttribute("kinematic-body", "linearDamping: 0.9; angularDamping: 0.9;");
        animal.setAttribute("gltf-model", model[randomizer]);
        animal.setAttribute("scale", scale[randomizer]);
        mainScene.appendChild(animal);

    }
};

// Start Script
document.onkeydown = event => {
    if (event.which == 32 && timeout == false) {
        bulletCollision();
    }
};