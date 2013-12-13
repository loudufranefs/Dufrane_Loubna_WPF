/*
Name: Loubna Dufrane
Date: Dec 12 2013
Class: Web Programming Fundamentals
Assignment: Conditionals - Wacky

*/
/*
Idea for wacky project is to decide which candy to give on Halloween based on the child's age using  conditional ternary operator
*/

var age = prompt("How old are you?"),
    youngChildren = 9,
    candy;

//check that prompt is not empty
if (age == ""){
    age = prompt("You forgot to say how old you are:");
}

// Decide which candy the child gets depending on the age
candy = (age < youngChildren) ? ("You will get lollipops!") :("You will get Jelly Beans!");

//print the message with the right candy
console.log(candy);


