/*
Name: Loubna Dufrane
Date: Dec 12 2013
Class: Web Programming Fundamentals
Assignment: Conditionals Worksheet
*/

/* Celsius to Fahrenheit converter */

var degrees = prompt("Type in the degree to convert without unit."),
    unit = prompt("Type in F to convert to Fahrenheit or C to convert to Celsius"),
    convertC,
    convertF;

//check if degree value is a number or not
if (degrees === isNaN) {
    
    //if the value for this variable is not a number, then give the user another chance to re-enter.
    degrees = prompt("Please enter a number for the degree you want to convert");
    
} else {
    //the value for the variable degree is a number
    
    
    if (unit === "C") {
        // if user enters "C" let's convert the number to celcius
        convertC = (degrees - 32) * 5 / 9;
        //print in console the converted value
        console.log("The temperature is " + convertC + " degrees Fahrenheit.");
    
    } else if (unit === "F") {
        // if user enters "F" let's convert the number to Fahrenheit
        convertF = degrees * 5 / 9 + 32;
        //print in console the converted value
        console.log("The temperature is " + convertF + " degrees Celcius.");
        

    } else {
        //If niether of those values were entered
        unit = prompt("Please F for Fahrenheit or C for Celsius");
    }
    
}