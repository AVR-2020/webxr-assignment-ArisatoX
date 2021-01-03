const walkAnimation = () => {
    var rotationMatrix = ["0", "90", "180", "270"];
    
    setInterval(function () {
        var target = document.querySelectorAll(".target");

        for(var i = 0; i < target.length; i ++)
        {
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
            var newPos = pos.x + pos.y + pos.z;
            
            if (afterRotation.y == "0" && pos.z < 18)
            {
                var newZ = pos.z + 5;
                newPos = pos.x + " " + pos.y + " " + newZ;
            }
            if (afterRotation.y == "90" && pos.x < 19)
            {
                var newX = pos.x + 5;
                newPos = newX + " " + pos.y + " " + pos.z;
            }
            if (afterRotation.y == "180" && pos.z > -18)
            {
                var newZ = pos.z - 5;
                newPos = pos.x + " " + pos.y + " " + newZ;
            }
            if (afterRotation.y == "270" && pos.x > -21)
            {
                var newX = pos.x - 5;
                newPos = newX + " " + pos.y + " " + pos.z;
            }
            
            var walkValue = "property: position; delay: 1500; dur: 2000; to: " + newPos + '";';
            target[i].setAttribute("animation__walk", walkValue);
        }
        
    }, 6000);

};
