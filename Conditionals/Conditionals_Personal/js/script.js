/*
Name: Loubna Dufrane
Date: Dec 12 2013
Class: Web Programming Fundamentals
Assignment: Conditionals - Personal
*/

/* Personal Tip calculator based on overall experience at a restaurant.

If the food is good with a rating of at least 6 and the waiter/waitress was friendly with a rating of at least 6 I will tip 30%

However, if the food or the service was not very good with a rating of 5 or under, I will tip 15%

And if the food was horrible with a rating of 5 or under, and the service was horrible with a rating of 5 or under, I will ask for the manager and tip 0%

*/

//givens
var food = prompt("Rate the food from 1 to 10:"),
    service = prompt("Rate the service from 1 to 10"),
    price = prompt("What is the total bill? (without dollar sign)");

//Find out if the food and the service was good
if (food > 5 && service > 5) {
    
    // calculate how much the tip would be
    var tip = Number(price) * 0.3;
    //calculate total bill
    var totalBill = Number(price) + tip;
    
    //print message that the food and the service were great
    console.log("Thank you for lovely food and a wonderful service! \nI will leave a $" + tip + ", making my total bill $" + totalBill);

} else if (food <= 5 && service <= 5) {
    // if food and service are both bad
    
    
    //print message that the food and the service were bad
    console.log("I would like to speak to the manager! \nI will leave a $" + tip + ", making my total bill $" + totalBill);

} else if (food <= 5 || service <= 5) {
    //if food or the service had a rating of equal to or under 5
    
    // calculate how much the tip would be
    var tip = Number(price) * 0.15;
    //calculate total bill
    var totalBill = Number(price) + tip;
    
     //print message that the food and the service were ok
    console.log("Thanks, it was ok! \nI will leave a $" + tip + ", making my total bill $" + totalBill);

}