const firebaseConfig = {
    apiKey: "AIzaSyBzqNcBID0RXI8-S-mcXMAeB10DE5CL7ns",
    authDomain: "hunting-season-17aca.firebaseapp.com",
    databaseURL: "https://hunting-season-17aca-default-rtdb.firebaseio.com",
    storageBucket: "hunting-season-17aca.appspot.com",
};

// Initialize firebase
var init = firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Array for database
var id = [];
var model = [];
var hp = [];
var scale = [];

// Get data
database.ref('animals').child('id').on('value', function(snapshot)
{
    snapshot.forEach(function(child) 
    {
        id.push(child.val());
    });
});

database.ref('animals').child('model').on('value', function(snapshot)
{
    snapshot.forEach(function(child) 
    {
        model.push(child.val());
    });
});

database.ref('animals').child('hp').on('value', function(snapshot)
{
    snapshot.forEach(function(child) 
    {
        hp.push(child.val());
    });
});

database.ref('animals').child('scale').on('value', function(snapshot)
{
    snapshot.forEach(function(child) 
    {
        scale.push(child.val());
    });
});




