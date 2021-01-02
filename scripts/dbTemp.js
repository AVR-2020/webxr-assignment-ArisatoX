// Testing for DB
var model = [
    "#horse",
    "#deer",
    '#tiger'
];

var scale = [
    "0.3 0.3 0.3",
    "0.1 0.1 0.1",
    "0.5 0.5 0.5"
];

var hp = [
    2,
    1,
    3
]

// Local global variable
var canShoot = true;

var timeout = false;

var gunshot = new Audio('assets/sound/gunshot.mp3');
var reload = new Audio('assets/sound/reload.mp3');
var hit = new Audio('assets/sound/hit.mp3');
var main = new Audio('assets/sound/main.mp3');

var score = 0;