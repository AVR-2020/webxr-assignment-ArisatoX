document.onkeydown = event => {

    if (event.keyCode == 32 && timeout == false && canShoot == true) 
    {
        var ammo = document.querySelector("#gun-id");
        var ammoCount = ammo.getAttribute("ammo");
        console.log(ammoCount);
        var ammoCountText = document.querySelector("#ammo-id");

        if (ammoCount > 0)
        {
            ammoCount--;
            ammo.setAttribute("ammo", ammoCount);
            ammoCountText.setAttribute("value", ammoCount);
            canShoot = false;
            setTimeout(function() { canShoot = true; }, 1650);
            shoot.play();
            bulletCollision();
        }
        
    }
    
    if (event.keyCode == 82 && timeout == true) 
    {
        resetGame();
    }
    
};