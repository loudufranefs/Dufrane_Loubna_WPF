/*
Name: Loubna Dufrane
Class: Web Programming Fundamentals
Assignment: Expressions - Balls of Yarn

Description: Calculate how many balls of yarn to buy to complete an afghan based on size.
*/

// yards per skein
var skein = prompt("How many yards is your ball of yarn?");

// stitches per inch with the hook being used
var stitchesInch = prompt("How many stiches per inch with your hook?");

// Rows per inch
var rowsInch = prompt("How many rows are created per inch?");

// width of desired afghan
var width = prompt("Desired Width:");

// length of desired afghan
var length = prompt("Desired Length:");

// calculate stiches per row
var stitchesRow = stichesInch * width;
