/*
Name: Loubna Dufrane
Date: Dec 12 2013
Class: Web Programming Fundamentals
Assignment: Conditionals Worksheet
*/

/* Group 1 - Celsius to Fahrenheit converter */

//givens
var degrees = prompt("Type in the temperature to convert (numbers only)"),
    unit = prompt("Type in F to convert to Fahrenheit or C to convert to Celsius"),
    convertC,
    convertF;

//check if degree value is a number
if (degrees === NaN) {
    //if the value for is not a number prompt again
    degrees = prompt("Please enter a number for the degree you want to convert");
}
    
//check which unit the user entered 
if (unit === "C") {
    // if user enters "C" let's convert the number to celcius
    convertC = (degrees - 32) * 5 / 9;
        
    //print in console the converted value
    console.log("The temperature is " + convertC + " degrees Celcius.");
    
} else if (unit === "F") {
    // if user enters "F" let's convert the number to Fahrenheit
    convertF = degrees * 9 / 5 + 32;
        
    //print in console the converted value
    console.log("The temperature is " + convertF + " degrees Fahrenheit.");

} else {
    //If niether of those values were entered
    unit = prompt("Please type in F for Fahrenheit or C for Celsius in captial letters.");
}



/* Group 2 - check login */

//givens
var enterUsername = prompt("Enter Username:"),
    enterPassword = prompt("Enter Password:"),
    user = "admin",
    password = "123456";




