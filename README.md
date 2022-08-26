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

Test 1: It should return a Pizza object with one property for size, one for cheese, and one for toppings.
Code: const myPizza = new Pizza("medium", "normal", ["pepperoni", "hot peppers"]);
Expected Output: Pizza{size: "medium," cheese: "normal", toppings: ["pepperoni", "hot peppers"]};


Describe Pizza.prototype.totalCost()

Test 1: It should return a number (price) that considers the size of the pizza.
Code: const myPizza = new Pizza("medium");
myPizza.totalCost();
Expected Result: 5

Test 2: It sould return a number (price) that considers the amount of cheese
const myPizza = new Pizza("medium", "heavy");
myPizza.totalCost();
Expected Result: 10

Test 3: It should return a number (price) that considers the number of toppings.
Code: const my Pizza = new Pizza ("medium", "heavy", ["pepperoni", "banana peppers"]);
myPizza.totalCost();
Expected Result: 14