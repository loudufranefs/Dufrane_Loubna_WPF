/*
Name: Loubna Dufrane
Date: Dec 19 2013
Class: Web Programming Fundamentals
Assignment: Functions Wacky

Description: Find out how much to spend on a gift certificate
This project contains conditional ternary operator

*/

//budget
var budget = prompt("What is your Christmas budget this year?");
//how much of the budget for adults
var adults = prompt("What percentage do you want to spend on adults?");
//how much of the budget for children
var children = prompt("What percentage do you want to spend on Children?");
//calculate gift certificate for adults
var adultBudget = budget / 100 * adults;

//calculate gift certificate for children
var childBudget = budget / 100 * children;

//Who the gift is for
var giftCert = prompt("Who is this gift certificate for? \nType A for an adult, or C for a child. ");

//validation
if (budget == ''){
    budget = prompt("You forgot to fill out: \nWhat is your Christmas budget this year?");
}
if (adults == ''){
    adults = prompt("You forgot to fill out: \nWhat percentage do you want to spend on adults?");
}
if (children == ''){
    children = prompt("You forgot to fill out: \nWhat percentage do you want to spend on Children?");
}
if (giftCert == ''){
    giftCert = prompt("You forgot to fill out: \nWho is this gift certificate for? \nType A for an adult, or C for a child. ");
}


function giftCertificate(budget, adults, children, giftCert){
    // condition
    giftBudgetMessage = (giftCert === "C") ? "This gift certificate is for a child. You can spend a total of $" + childBudget : "This gift certificate is for an adult.You can spend a total of $" + adultBudget;
    
    //return message
    return giftBudgetMessage;
}

// invoke function
var total = giftCertificate(budget, adults, children, giftCert);
//print message
console.log(total);