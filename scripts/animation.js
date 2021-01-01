const walkAnimation = () => {
    var rotationMatrix = ["0", "90", "180", "270"];
    
    setInterval(function () {
        var target = document.querySelectorAll(".target");
        console.log(target);

        for(var i = 0; i < target.length; i ++)
        {
            console.log("THIS IS TARGET NUMBER " + i);
            console.log(target[i]);
            // Rotation
            var rotation = target[i].getAttribute("rotation");
            var randomizer = Math.floor(Math.random() * rotationMatrix.length);
            var newRotation = rotation.x + " " + rotationMatrix[randomizer] + " " + rotation.z;
            var rotateValue = "property: rotation; dur: 1500; to: " + newRotation + '";';
            target[i].setAttribute("animation__rotation", rotateValue);
            target[i].setAttribute("rotation", newRotation);

            // Walk
            var afterRotation = target[i].getAttribute("rotation");
            var pos = target[i].getAttribute("position");
            if (afterRotation.y == "0")
            {
                console.log("up");
                var newZ = pos.z + 5;
                var newPos = pos.x + " " + pos.y + " " + newZ;
            }
            if (afterRotation.y == "90")
            {
                console.log("left");
                var newX = pos.x + 5;
                var newPos = newX + " " + pos.y + " " + pos.z;
            }
            if (afterRotation.y == "180")
            {
                console.log("down");
                var newZ = pos.z - 5;
                var newPos = pos.x + " " + pos.y + " " + newZ;
            }
            if (afterRotation.y == "270")
            {
                console.log("right");
                var newX = pos.x - 5;
                var newPos = newX + " " + pos.y + " " + pos.z;
            }
            
            var walkValue = "property: position; delay: 1500; dur: 2000; to: " + newPos + '";';
            target[i].setAttribute("animation__walk", walkValue);
        }
        
    }, 6000);

};
