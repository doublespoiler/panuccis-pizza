# Pizza Parlor

#### By Skylan Lew

#### Epicodus Week 4 Project <br> Pizza Parlor Order Website

## Technologies Used

* HTML
* CSS
* Javascript
* Bootstrap

## Description

This website allows the user to make a pizza from the given options, and have various add ons. Upon submission, the form will calculate the total cost, and display an itemized list of what they ordered, with costs for each. At the bottom of the reciept, it shows the subtotal, tax, and final total. Due to using `required` in the HTML for the pizza options (but only the pizza options), the user is forced to make a pizza.

There's an easter egg! Please try to find it!

## Setup/Installation Requirements

* To clone:
  * git clone https://github.com/doublespoiler/panuccis-pizza
  * OR
  * Navigate to the repository, click the "Code" button, and "Download Zip".  You will need to unzip this folder to a place you can access.
* open index.html located in the portfolio-main folder in your web browser or IDE/text editor
  * alternatively, access through [Github Pages https://doublespoiler.github.io/panuccis-pizza](https://doublespoiler.github.io/panuccis-pizza)
* Make your pizza!

## Tests

Describe Pizza()

Test 1: It should return a Pizza object with one property for size string, one for cheese string, one for toppings array, one for other array.  
Code:  
  const myPizza = new Pizza("md-size", "md-cheese", ["pepperoni", "hot peppers"], ["millennia-cake", "popplers-cup"]);  
Expected Output:  
Pizza{size: "md-size," cheese: "md-cheese", toppings: ["pepperoni", "hot-peppers"], other:["millennia-cake", "popplers-cup"]};  

Describe Pizza.prototype.totalCost()

Test 1: It should return a number (price) that considers the size of the pizza with tax. Tax is 25%.  
Code:  
  const myPizza = new Pizza("md-size");  
  myPizza.totalCost();  
Expected Result:  
  7.7 

Test 2: It sould return a number (price) that considers the amount of cheese
Code:  
  const myPizza = new Pizza("md-size", "lg-cheese");  
  myPizza.totalCost();  
Expected Result:  
  18.75  

Test 3: It should return a number (price) that considers any number of toppings.
Code:  
  const myPizza = new Pizza ("md-size", "lg-cheese", ["pepperoni", "banana peppers", "olives"]);
  myPizza.totalCost();
Expected Result:  
  26.25

Test 4: It should return a number (price) that considers any number of drinks.
Code:  
  const myPizza = new Pizza ("md-size", "lg-cheese", ["pepperoni", "banana peppers", "olives"], ["lobrau", "slurm"]);  
  myPizza.totalCost();  
Expected Result:  
  45  

Test 5: It should return a number (price) that considers any number of other items.
Code:  
  const myPizza = new Pizza ("md-size", "lg-cheese", ["pepperoni", "banana peppers", "olives"], ["lobrau", "slurm"], ["millennia-cake", "popplers-cup"]);  
  myPizza.totalCost();  
Expected Result:  
  63.75  

## Known Bugs

* None

## License

[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)

Copyright (c) 2022 Skylan Lew
