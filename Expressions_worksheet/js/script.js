/*
Name: Loubna Dufrane
Class: Web Programming Fundamentals
Assignment: Expression Worksheet
*/



/*************DOG YEARS****************/

//set given for age in human years.
var humanYears = 2;

//calculate dog years based on the number given in humanYears variable.
var dogYears = 7 * humanYears;

//print out the result
console.log("Sparky is " + humanYears + " human years old which is " + dogYears + " in dog years.");



/*************SLICES OF PIE PART 1****************/

//Number of slices per pizza
var slices = 8;
//Number of people at the party
var people =10;
//Number of pizzas ordered
var pizzas = 4;

//Calculated number of slices per person
var slicesPerPerson = pizzas * slices / people;

//print out result 
console.log ("Each person ate " + slicesPerPerson + " slices of pizza at the party.");


/*************SLICES OF PIE PART 2****************/
//calculate the number of slices per person and get the remainder.
var leftOvers = pizzas * slices % people;

console.log("Sparky got " + leftOvers + " slices of pizza.");

