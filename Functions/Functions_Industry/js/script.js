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

//function
function profits(developmentHours, hourly, sales, productPrice){
    
    //calculate how much the product costs in development hours
    var productCost = developmentHours * hourly;
    //calculate sales in profit value
    var totalSales = sales * productPrice;
    
    
    if (productCost < totalSales){ // if sales are more than product cost
        //print message
        console.log("Awesome! You are in profit zone!!!");
    } else if (productCost === totalSales){ // if sales and cost equal each other
        //print message 
         console.log("Looks like you broke even, but you are SO close...");
    } else { // if there are no profits 
        // print message to keep trying
        console.log("You haven't made a profit yet, keep trying!!");
    }
    
}


