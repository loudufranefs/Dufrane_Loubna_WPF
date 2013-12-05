/*
Name: Loubna Dufrane
Class: Web Programming Fundamentals
Assignment: Expressions - Industry Specific

Description: Simple Calculation converting Pixels to Percentages based on the CSS box Model
*/

// width of parent container in pixels
var parentContainer = prompt("Width of the parent container in pixels:");

// width of container in pixels
var container = prompt("Total width of your container in pixels:");

//padding in pixels
var padding = prompt("Padding in pixels: ");

// margins in pixels
var margin = prompt("Margin in pixels:");

// border in  pixels
var border = prompt("Border in pixels:");

// convert container width from pixels to percentages
var containerWidth = 100 * (container / parentContainer);


//print values in console for testing
console.log("Parent Container: " + parentContainer + "px\nContainer: " + container + "px\nPadding: " + padding + "px\nMargin: " + margin + "px\nBorder: " + border + "px\nContainer Width: " + containerWidth + "%");

