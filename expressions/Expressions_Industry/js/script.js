/*
Name: Loubna Dufrane
Class: Web Programming Fundamentals
Assignment: Expressions - Industry Specific

Description: Simple Calculation converting Pixels to Percentages based on the CSS box Model
*/

// width of parent container in pixels
var parentContainer = prompt("Width of the parent container in pixels:");

// Class name of the container
var containerName = prompt("What is the class name of your container?");

// width of container in pixels
var container = prompt("Total box width of " + containerName + " in pixels:");

//padding in pixels
var padding = prompt("Padding in pixels: ");

// margins in pixels
var margin = prompt("Margin in pixels:");

// border in  pixels
var border = prompt("Border in pixels:");

// convert container width from pixels to percentages
var containerWidth = 100 * (container / parentContainer);

//convert padding from pixels to percentage / needs to be multiplied by 2 to get left and right paddings.
var paddingWidth = 100 * (padding * 2 / parentContainer);

//convert margin from pixels to percentage / needs to be multiplied by 2 to get left and right margins.
var marginWidth = 100 * (margin * 2 / parentContainer);

//convert border from pixels to percentage / needs to be multiplied by 2 to get left and right borders.
var borderWidth = 100 * (border * 2 / parentContainer);

//get actual width for the container based on the CSS box model
var contentWidth = containerWidth - (paddingWidth + marginWidth + borderWidth);

//Print results
console.log("The class ." + containerName + " will have a width of "  + contentWidth + "%, a padding of "  + paddingWidth + "%, a margin of "  + marginWidth + "%, and a border of "  + borderWidth + "%. The total box width of this class will be "  + containerWidth + "%. In CSS your converted values would look like this:\n\n ." + containerName + "{\n     width: " + contentWidth + "%; \n     padding: " + paddingWidth + "%;\n     margin: "  + marginWidth + "%;\n     border: " + borderWidth + "%;\n}");

