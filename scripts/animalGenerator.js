function animalGenerator(amount) {

    for (i = 0; i < amount; i++)
    {
        var randomizer = Math.floor(Math.random() * model.length);
        var positionNow = positionRandomizer();
        
        let animal = document.createElement("a-entity");
        animal.setAttribute("class", "target");
        animal.setAttribute("position", positionNow);
        animal.setAttribute("kinematic-body", "linearDamping: 0.9;");
        animal.setAttribute("id", id[randomizer]);
        animal.setAttribute("gltf-model", model[randomizer]);
        animal.setAttribute("hit_points", hp[randomizer]);
        animal.setAttribute("scale", scale[randomizer]);
        mainScene.appendChild(animal);
        console.log("finished loading");
    }

}