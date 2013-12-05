/*
Name: Loubna Dufrane
Class: Web Programming Fundamentals
Assignment: Expressions - Balls of Yarn

Description: Calculate how many balls of yarn to buy to complete an afghan based on size.
*/

// yards per skein
var skein = prompt("How many yards is your ball of yarn?");

// stitches per inch (this is based on the crochet hook and type of yarn)
var stitchesInch = prompt("How many stiches per inch with your hook?");

// Rows per inch (Again based on the crochet hook and type of yard)
var rowsInch = prompt("How many rows are created per inch?");

// width of desired afghan
var width = prompt("Desired Width:");

// length of desired afghan
var length = prompt("Desired Length:");

// calculate stiches per row
var stitchesRow = stitchesInch * width;

// calculate total stitches
var totalYarn = length * rowsInch * stitchesRow;

//print out for testing
console.log("Stiches per Inch: " + stitchesInch + "\nRows per Inch: " + rowsInch + "\nWidth: " + width + "\nLength: " + length + "\nStiches Per Row: " + stitchesRow + "\nInches of Yarn needed: " + totalYarn);

