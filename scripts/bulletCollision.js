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
        hit.play();
        var health = event.detail.body.el.getAttribute("hit_points");
        health--;

        if (health == 0)
        {
            event.detail.target.el.removeEventListener('collide', bulletCollided);

            // Increment score and remove animal
            var type = event.detail.body.el.getAttribute("id");
            scoreIncrement(type);
            mainScene.removeChild(event.detail.body.el);

            // Create animal
            animalGenerator(1);
        }
        else
        {
            event.detail.body.el.setAttribute("hit_points", health);
        }
        
    }
};
