/*
Name: Loubna Dufrane
Class: Web Programming Fundamentals
Assignment: Expressions - Balls of Yarn

Description: Calculate how many balls of yarn to buy to complete an afghan based on size.
*/

// yards per skein (ie. 140)
var skein = prompt("How many yards is your ball of yarn?");

// stitches per inch (this is based on the crochet hook and type of yarn)
// (ie. 4)
var stitchesInch = prompt("How many stiches per inch with your hook?");

// Rows per inch (Again based on the crochet hook and type of yard)
// (ie. 4)
var rowsInch = prompt("How many rows are created per inch?");

// width of desired afghan (ie. 60)
var width = prompt("Desired Width:");

// length of desired afghan (ie. 60)
var length = prompt("Desired Length:");

// calculate stiches per row
var stitchesRow = stitchesInch * width;

// calculate total stitches in inches
var totalYarn = length * rowsInch * stitchesRow;

// Convert inches to yards (1 yard = 36 inches) and calculate how many balls are needed.
var skeinsNeeded = (totalYarn / 36) / skein;

//print out Details
console.log("DETAILS:\nOneBall of Yarn is: " + skein + "yds\nStiches per Inch: " + stitchesInch + "\nRows per Inch: " + rowsInch + "\nWidth: " + width + "inches\nLength: " + length + "inches\nStiches Per Row: " + stitchesRow + "\nYarn needed: " + totalYarn + "inches\nSkeins: " + skeinsNeeded);

