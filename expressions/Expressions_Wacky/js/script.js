/*
Name: Loubna Dufrane
Class: Web Programming Fundamentals
Assignment: Expressions - Wacky

Description: Estimate how many Jelly Beans are in a Jar and win the contest.
*/

//get jar height
var jarHeight = prompt("Want to make a winning guess at a Jelly Bean in a Jar contest? \nWhat is the jar height in inches?");

//get jar width
var jarWidth = prompt("What is the jar width in inches?");

//get jellybean width
var jellyBeanWidth = prompt("What is the length of the average jelly bean in inches.");

//get jellybean width
var jellyBeanWidth = prompt("What is the width of the average jelly bean in inches.");

//get jellybean length
var jellyBeanLength = prompt("What is the length of the average jelly bean in inches.");

//add all my variables in an array.
var widthHeight = [jarHeight, jarWidth, jellyBeanLength, jellyBeanWidth];

//calculate the volume of the jar in cubic inches -  πr2h, since we have a diameter, we use πdh
var jarVolume = 3.142 * jarWidth * jarHeight;

//calculate the volume of a an average jelly bean in cubic inches -  πr2h
var jellyBeanSize = 3.142 * jellyBeanWidth * jellyBeanLength;

