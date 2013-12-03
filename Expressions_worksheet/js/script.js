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
var people = 10;
//Number of pizzas ordered
var pizzas = 4;

//Calculates number of slices per person
var slicesPerPerson = pizzas * slices / people;

//print out result
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");


/*************SLICES OF PIE PART 2****************/

//calculates the number of slices per person and get the remainder.
var leftOvers = pizzas * slices % people;

//print out result
console.log("Sparky got " + leftOvers + " slices of pizza.");


/*************Average Shopping Bill****************/

//five weeky grocery totals
var weeklyGrocery = [89, 130, 110, 140, 95];

//total amount spent on groceries
var totalGroceries =
    weeklyGrocery[0] +
    weeklyGrocery[1] +
    weeklyGrocery[2] +
    weeklyGrocery[3] +
    weeklyGrocery[4];

//calculates average weekly grocery spending
var averageGroceries = totalGroceries / 5;

//print out result
console.log("You have spent a total of $" + totalGroceries + " on groceries over 5 weeks. That is an average of $" + averageGroceries + " per week.");


/*************Discounts ****************/

// setting orginal price
var price = 10;

// setting Discount Percentage
var discount = 20;

// description of item
var itemDescription = "Dog toy";

// setting sales tax percentage of 8.25%
var salesTax = 0.0825;


// calculates price of item without tax
var withoutTax = price - (price * discount/100);

// calculates price of item with tax
var withTax = withoutTax * salesTax + withoutTax;


//print result
console.log("Your " + itemDescription + " was originally $" + price + ", but after a " + discount + "% discount, it is now $" + withoutTax + " without tax, and $" + withTax + " with tax.");