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
var adultBudget = budget / 100 * children;

//Who the gift is for
var giftCert = prompt("Who is this gift certificate for? \nType A for an adult, or C for a child. ");


function giftCertificate(){
    // condition
    giftBudgetMessage = (giftCert === "C") ? "This gift certificate is for a child." : "This gift certificate is for an adult.";
    
    //return message
    return giftBudgetMessage;
}
