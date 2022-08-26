# Pizza Parlor

#### By Skylan Lew

#### _{Brief description of application}_

## Technologies Used

* HTML
* CSS
* Javascript
* Bootstrap

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_



## Tests


## Known Bugs

* _Any known issues_
* _should go here_

## License

[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)

Copyright (c) 2022 Skylan Lew



Describe Pizza()

Test 1: It should return a Pizza object with one property for size string, one for cheese string, one for toppings array, one for other array.
Code: const myPizza = new Pizza("md-size", "md-cheese", ["pepperoni", "hot peppers"], ["millennia-cake", "popplers-cup"]);
Expected Output: Pizza{size: "md-size," cheese: "md-cheese", toppings: ["pepperoni", "hot-peppers"], other:["millennia-cake", "popplers-cup"]};


Describe Pizza.prototype.totalCost()

Test 1: It should return a number (price) that considers the size of the pizza with tax. Tax is 25%.
Code: const myPizza = new Pizza("md-size");
myPizza.totalCost();
Expected Result: 7.7

Test 2: It sould return a number (price) that considers the amount of cheese
Code: const myPizza = new Pizza("md-size", "lg-cheese");
myPizza.totalCost();
Expected Result: 18.75

Test 3: It should return a number (price) that considers any number of toppings.
Code: const myPizza = new Pizza ("md-size", "lg-cheese", ["pepperoni", "banana peppers", "olives"]);
myPizza.totalCost();
Expected Result: 26.25

Test 4: It should return a number (price) that considers any number of drinks.
Code: const myPizza = new Pizza ("md-size", "lg-cheese", ["pepperoni", "banana peppers", "olives"], ["lobrau", "slurm"]);
myPizza.totalCost();
Expected Result: 45

Test 5: It should return a number (price) that considers any number of other items.
Code: const myPizza = new Pizza ("md-size", "lg-cheese", ["pepperoni", "banana peppers", "olives"], ["lobrau", "slurm"], ["millennia-cake", "popplers-cup"]);
myPizza.totalCost();
Expected Result: 63.75
