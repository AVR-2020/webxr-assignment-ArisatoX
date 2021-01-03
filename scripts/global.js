// Local global variable
var canShoot = true;

var timeout = true;

var shoot = new Audio('assets/sound/shoot.mp3');
var reload = new Audio('assets/sound/reload.mp3');
var hit = new Audio('assets/sound/hit.mp3');
var main = new Audio('assets/sound/main.mp3');

main.volume = 0.4;
shoot.volume = 0.8;

var score = 0;