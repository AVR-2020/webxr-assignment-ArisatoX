var minus = [
    1,
    -1
]

const positionRandomizer = () => {

    var x = Math.floor(Math.random() * 20);
    var z = Math.floor(Math.random() * 20);

    var randomizerMinus = Math.floor(Math.random() * minus.length);
    x = x * minus[randomizerMinus];
    z = z * minus[randomizerMinus];

    var positionNow = x + " 0 " + z;

    return positionNow;
}


