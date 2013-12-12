/*
Name: Loubna Dufrane
Date: Dec 12 2013
Class: Web Programming Fundamentals
Assignment: Conditionals Worksheet
*/

/* Celsius to Fahrenheit converter */

var degrees = prompt("Type in the degree to convert without unit."),
    unit = prompt("Type in F for Fahrenheit or C for Celsius");

//check if degree value is a number or not
if (degrees === NaN) {
    
    
    if(unit === "C") {
        // if user enters "C"
        
    } else if (unit === "F") {
        //if user enters "F"

    } else {
        //If niether of those values were entered
        unit = prompt("Please F for Fahrenheit or C for Celsius");
    }
} else {
    //give another prompt and set new value to variable.
    degrees = prompt("Please enter a number for the degree you want to convert");
    
}