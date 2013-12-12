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


/* Group 2 - check login  */

//givens
var enterUsername = prompt("Enter Username:"),
    enterPassword = prompt("Enter Password:"),
    user = "admin",
    password = "123456";

    //if username is correct
if (enterUsername === user && enterPassword === password) {
    //print our welcome message
    console.log("Welcome, " +  user + "!");

    // if username is not correct
} else if (enterUsername !== user) {
    //Print message that user is not found
    console.log("User not found. Try again.");
    
    // if password is not correct
} else if (enterPassword !== password) {
    // Print message that password does not match
    console.log("Password does not match out records.");
}



/* Group 3 - Movie Ticket Price */


//givens
var age = prompt("Type in your age:"),
    time = prompt("Type in time of the movie:");


// if a customer is under 10 or above 55 or
// if the movie is between 3 and 5 pm  price is $7.
// otherwise price is $12

if (age < 10 || age > 55 || (time >= 3 && time <= 5)) {
    // print message if condition is met
    console.log("The ticket price is $7");
} else {
    // print message if the condition is not met
    console.log("The ticket price is $12");
}