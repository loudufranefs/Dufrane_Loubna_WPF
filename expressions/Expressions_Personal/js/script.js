/*
Name: Loubna Dufrane
Class: Web Programming Fundamentals
Assignment: Expressions - Balls of Yarn

Description: Calculate how many balls of yarn to complete an afghan based on desired width and length.
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

// calculate total stitches in yards and convert inches to yards (1 yard = 36 inches)
var totalYarn = (length * rowsInch * stitchesRow) / 36;

// Calculate how many balls are needed.
var skeinsNeeded = totalYarn / skein;

//print out Details
console.log("To crochet an afghan that is " + width + " inches in width and " + length + " inches in length, you will need " + skeinsNeeded + " amount of balls of yarn that are " + skein + " yds each." + "\n\nProject Details:\nOne Ball of Yarn is: " + skein + " yds\nWidth: " + width + " inches\nLength: " + length + " inches\nStiches Per Row: " + stitchesRow + "\nYarn needed: " + totalYarn + " yds\nBalls of Yarn: " + skeinsNeeded);