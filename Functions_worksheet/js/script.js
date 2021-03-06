/*
Name: Loubna Dufrane
Date: Dec 13 2013
Class: Web Programming Fundamentals
Assignment: Functions Worksheet
*/

/* Calculate the circumference of a circle. */

//pass argument into function
var circCalc = calcCircumference(20);

//setup function
function calcCircumference(r) {
   // approximate pi
    var pi = 3.14159;
    //calculate circumference
    var circumference = 2 * pi * r;
    //return the calculation
    return circumference;
}
//print result in console log
console.log('The circumference of the circle is ' + circCalc + '.');



/* Stung! */

// set up argument
var stings = killerBeeStings(135);

function killerBeeStings(weight){ // set up function
    //set up stings per pound
    var stingsPerPound = 8.666666667;
    //calculate number of stings
    var numberOfStings = stingsPerPound * weight;
    //return number of stings
    return numberOfStings;
}
// print result in console log
console.log('It takes ' + stings + ' bee stings to kill this animal.');