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
    daysLeft = prompt("How many days ago did you get your quote?");

//validation
if (wordPress == ""){
    // if wordPress is not filled out, prompt again
    wordPress = prompt("You forgot to tell us if you want to user WordPress with your website: Y or N");
}

if (daysLeft == ""){
    // if daysLeft is not filled out, prompt again
    daysLeft = prompt("You forgot to add how many days ago you recieved a quote:");
}


//Check if clients wants wordpress and quote is still valid
if (wordPress === 'Y' && daysLeft <= 5) {
    //print message with discount
    console.log("Nice! You get a 10% Discount on your Total Order!");

} else if (daysLeft <= 5) {
    //check if their quote is still valid
    //print message with discount
    console.log("Good News! You get a 5% Discount on your Total Order!");

} else {
    // if their quote has expired, there is no discount.
    console.log("Sorry! There are no available discounts for your order.");
}