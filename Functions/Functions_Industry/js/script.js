/*
Name: Loubna Dufrane
Date: Dec 19 2013
Class: Web Programming Fundamentals
Assignment: Functions Industry

Description: Profit reach based on amount of sales or clients vs amount of hours it took to develop a product or render a service.

*/

// variable set up
var developmentHours = prompt("How many development hours went into this product?");
var hourly = prompt("How much do you charge per hour in USD?");
var sales = prompt("How many sales so far?");
var productPrice = prompt("How much are you charging for the product?");

//validation
if(developmentHours != isNaN){
    developmentHours = prompt("You forgot to fill in this field: \nHow many development hours went into this product?");
}

if(hourly != isNaN){
    prompt("You forgot to fill in this field: \nHow much do you charge per hour in USD?");
}

if(sales != isNaN){
    prompt("You forgot to fill in this field: \nHow many sales so far?");
}

if(productPrice != isNaN){
    productPrice = prompt("You forgot to fill in this field: \nHow much are you charging for the product?");
}



//function
function profits(developmentHours, hourly, sales, productPrice) {

    //calculate how much the product costs in development hours
    var productCost = developmentHours * hourly;
    //calculate sales in profit value
    var totalSales = sales * productPrice;
    // this will store the message for the return
    var profitMessage = '';

    if (productCost < totalSales) { // if sales are more than product cost
        //profit message if there is a profit
        profitMessage = "Awesome! You are in profit zone!!!";
    } else if (productCost === totalSales) { // if sales and cost equal each other
        //profit message if sales and costs are equal
        profitMessage = "Looks like you broke even, but you are SO close...";
    } else if (productCost > totalSales) { // if there are no profits 
        //profit message if there are no profits
        profitMessage = "You haven't made a profit yet, keep trying!!";
    }
    //returns this message from statement
    return profitMessage;
}

//invoke function
var profitsMade = profits(developmentHours, hourly, sales, productPrice);

// print in console log
console.log(profitsMade);