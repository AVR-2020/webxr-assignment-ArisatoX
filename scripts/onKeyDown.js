document.onkeydown = event => {

    // Shoot
    if (event.keyCode == 32 && timeout == false && canShoot == true) 
    {
        var ammo = document.querySelector("#gun-id");
        var ammoCount = ammo.getAttribute("ammo");
        var ammoCountText = document.querySelector("#ammo-id");
        canShoot = false;

        if (ammoCount > 0)
        {
            setTimeout(function() { canShoot = true; }, 1650);
            ammoCount--;
            ammo.setAttribute("ammo", ammoCount);
            ammoCountText.setAttribute("value", ammoCount);
            shoot.play();
            bulletCollision();
        }
        else
        {
            setTimeout(function() { canShoot = true; }, 2000);
            reload.play();
            ammo.setAttribute("ammo", 10);
            ammoCountText.setAttribute("value", 10);
        }
    }

    // Reload
    if (event.keyCode == 82 && timeout == false && canShoot == true) 
    {
        canShoot = false;
        setTimeout(function() { canShoot = true; }, 2200);

        var ammo = document.querySelector("#gun-id");
        var ammoCountText = document.querySelector("#ammo-id");

        reload.play();
        ammo.setAttribute("ammo", 10);
        ammoCountText.setAttribute("value", 10);
    }
    
};