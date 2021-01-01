const walkAnimation = () => {
    var target = document.querySelectorAll(".target");
    var rotationMatrix = ["0", "90", "180", "270"];
    
    setInterval(function () {
        console.log("begin");

        // Rotation
        var rotation = target[0].getAttribute("rotation");
        var randomizer = Math.floor(Math.random() * rotationMatrix.length);
        var newRotation = rotation.x + " " + rotationMatrix[randomizer] + " " + rotation.z;
        var rotateValue = "property: rotation; dur: 2000; to: " + newRotation + '";';
        console.log(rotateValue);
        target[0].setAttribute("animation__rotation", rotateValue);
        target[0].emit("rotationAnimation");
        target[0].setAttribute("rotation", newRotation);

        // Walk
        var afterRotation = target[0].getAttribute("rotation");
        console.log(afterRotation.y);
        var pos = target[0].getAttribute("position");
        if (afterRotation.y == "0")
        {
            console.log("up");
            var newZ = pos.z + 10;
            var newPos = pos.x + " " + pos.y + " " + newZ;
        }
        if (afterRotation.y == "90")
        {
            console.log("left");
            var newX = pos.x + 10;
            var newPos = newX + " " + pos.y + " " + pos.z;
        }
        if (afterRotation.y == "180")
        {
            console.log("down");
            var newZ = pos.z - 10;
            var newPos = pos.x + " " + pos.y + " " + newZ;
        }
        if (afterRotation.y == "270")
        {
            console.log("right");
            var newX = pos.x - 10;
            var newPos = newX + " " + pos.y + " " + pos.z;
        }
        
        var walkValue = "property: position; delay: 2000; dur: 4000; to: " + newPos + '";';
        console.log(walkValue);
        target[0].setAttribute("animation__walk", walkValue);
        target[0].emit("walkAnimation");

        console.log("end");
    }, 10000);

    target.emit("walkAnimation");
};
