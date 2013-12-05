/*
Name: Loubna Dufrane
Date: Dec 5 2013
Class: Web Programming Fundamentals
Assignment: Expressions - Wacky

Description: Estimate how many Jelly Beans are in a Jar and win the contest.
*/

//get jar height
var jarHeight = prompt("Want to make a winning guess at a Jelly Bean in a Jar contest? \nWhat is the jar height in cm?");

//get jar width
var jarWidth = prompt("What is the jar width in cm?");

//get jellybean width
var jellyBeanWidth = prompt("What is the width of the average jelly bean in cm.");

//get jellybean length
var jellyBeanLength = prompt("What is the length of the average jelly bean in cm.");

//add all my variables in an array.
var widthHeight = [jarHeight, jarWidth, jellyBeanLength, jellyBeanWidth];

//calculate the radius for the jar
var jarRaduis = widthHeight[1] / 2;

//calculate the volume of the jar in cubic cm -  πr2h
var jarVolume = 3.142 * (jarRaduis * jarRaduis) * widthHeight[0];

//calculate the radius of a jellybean
var jellyBeanRadius = widthHeight[3] / 2;

//calculate the size of an average jelly bean in cubic cm -  πr2h
var jellyBeanSize = 3.142 * (jellyBeanRadius * jellyBeanRadius) * widthHeight[2];

//calculate actual space the jellybeans are using in the jar. There is space in between solids in a jar, on average only taking up 70%.
var spaceInJar = jarVolume * 0.7;

//calculate how many jelly beans are in the jar.
var totalJellyBeans = jellyBeanSize * spaceInJar;

//print out result
console.log("There are approximately " + totalJellyBeans + " Jelly Beans inside this jar. This is an estimate only!");


