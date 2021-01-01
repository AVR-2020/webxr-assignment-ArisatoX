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

        // Move animal to new place (respawn)
        scoreIncrement();
        var animal = event.detail.body.el;
        var x = Math.floor(Math.random() * 20);
        var z = Math.floor(Math.random() * 20);

        var randomizerMinus = Math.floor(Math.random() * minus.length);
        x = x * minus[randomizerMinus];
        z = z * minus[randomizerMinus];

        var positionNow = x + " 0 " + z;
        console.log(positionNow);

        animal.setAttribute("position", positionNow);

        console.log(animal);
        
    }
};

// Start Script
document.onkeydown = event => {
    if (event.which == 32) {
        bulletCollision();
    }
};