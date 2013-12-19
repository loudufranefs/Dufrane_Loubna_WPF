/*
Name: Loubna Dufrane
Date: Dec 13 2013
Class: Web Programming Fundamentals
Assignment: Functions Personal

Description: Dog Food
How many days would a bag of dog food last based on the size of the bag and the amount of food that is given to the dog each day. I have 2 dogs, and never remember how long a bag lasts for my dogs.
*/

// How much dog food does the bag hold
var dogFood = prompt("How many pounds of dog food does the bag hold?");
// how much food does the dog eat per day in cups
var dailyIntake =  prompt("How much food does 1 dog eat per day? (in cups)");
//how many dogs eat from this bag of dog food
var dogs = prompt("How many dogs are there?");


//create function
function dogFoodDays(dogfood, dailyIntake, dogs) {
    //validate variable
    if(dogfood ===''){
        dogFood = prompt("How many pounds of dog food does the bag hold?");
    }
    if(dailyIntake ===''){
        dailyIntake =  prompt("How much food does 1 dog eat per day? (in cups)");
    }
    if(dogs ===''){
       dogs = prompt("How many dogs are there?");
    }
    
    //convert cups to pounds
    dailyIntake = Number(dailyIntake) * 0.52159;
    //make calculation
    var totalDays = Number(dogfood) / Number(dailyIntake) * Number(dogs);
    return totalDays;

}
//contain function in a new variable for output
var amountOfDays = dogFoodDays(dogFood, dailyIntake, dogs);
