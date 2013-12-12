/*
Name: Loubna Dufrane
Date: Dec 12 2013
Class: Web Programming Fundamentals
Assignment: Conditionals - Industry Specific

*/

/*
If a client wants to add WordPress as their content management to their website and they are ordering within 5 days of their quote, then they get a 10% discount off their total order. Otherwise they only get a 5% discount if they order within 5 days of their quote, and no discount if their quote has expired.
*/

//setting variables
var wordPress = prompt("Would you like to Add WordPress to your website, type in Y for yes or N for No."),
    daysLeft = prompt("How many days are left before your quote expires?");

//Check if clients wants wordpress and quote is still valid
if (wordPress === 'Y' && daysLeft <= 5) {
    //print message with discount
    console.log("Nice! You get a 10% Discount on your Total Order!");

}