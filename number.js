// Create arrays
var array = [];
var red = [];
var yellow = [];
var white = [];
//Random numbers from 1 to 100
for (var i = 0, l = 100; i < l; i++) {
    array.push(Math.round(Math.random() * l));
}
//Posistion 1 is red
for (var i = 0; i < array.length; i+=3){
    //Remove even numbers
    if (array[i] % 2) {
        red.push(array[i]);
    }
}
//Create sorting function
sorting = function(a, b){return a-b};
//Sort in ascending order
red.sort(sorting);
//Position 2 is yellow
for (var i = 1; i < array.length; i+=3){
    //Remove odd numbers
    if (! (array[i] % 2)) {
        yellow.push(array[i]);
    }
}
//Sort in ascending order
yellow.sort(sorting);
//Position 3 is white
for (var i = 2; i < array.length; i+=3){
    //Remove if divisible by 3
    if (array[i] % 3) {
        white.push(array[i]);
    }
}
//Sort in ascending order
white.sort(sorting);
//red < yellow < white
results = red.concat(yellow, white);
//Display results
console.log(results);
