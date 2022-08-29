//Utility Logic 
function getInputValue(inputArray){
  const innerTextArray = [];
  inputArray.forEach(function(element){
    const elementString = element.value;
    innerTextArray.push(elementString);
  });
  return innerTextArray;
}

//Business Logic
function Pizza(size, cheeseAmt, toppings, drinks, other, cheese) {
  this.size = size;
  this.cheeseAmt = cheeseAmt;
  this.cheese = cheese;
  this.toppings = toppings;
  this.drinks = drinks;
  this.other = other;
}

class Toppings extends Pizza {
  pushToPizza(input){
    this.prices.push(input);
  }
}


Pizza.prototype.totalCost = function(){
  let total = 0;
  if (this.size === "lg-size"){
    total += 15;
  } else {
    total += 5; 
  }

  switch (this.cheeseAmt) {
    case("lt-cheese"):
      total += 1.616;
      break;
    case("md-cheese"):
      total += 5;
      break;
    case("lg-cheese"):
      total += 10;
      break;
    case("x-cheese"):
      total += 25;
      break;
    case("xx-cheese"):
      total += 50;
      break;
    case("xxx-cheese"):
      total += 69;
      break;
  }

  const toppingsArray = []

  this.toppings.forEach(function(element){
    total += 2;
  });


  this.drinks.forEach(function(element){
    switch (element) {
      case("coke"):
      case("rootbeer"):
      case("cider"):
        total += 2;
        break;
      case("lobrau"):
      case("pbr"):
      case("fortran"):
        total += 10;
        break;
      case("slurm"):
        total += 5;
        break;
    }
  });

  this.other.forEach(function(element){

    switch (element) {
      case("millennia-cake"):
      case("spice-weasel"):
        total += 10;
        break;
      case("popplers-cup"):
      case("space-honey"):
      case("can-ranch"):
      case("can-garlic"):
      case("cheese-weasel"):
        total += 5;
        break;
    }

  });
  total = total * 1.25;
  return total;
}

//UI Logic
window.addEventListener("load", function(){
  document.querySelector("form#pizza-form").addEventListener("submit", handleSubmission);
})

function handleSubmission(event){
  event.preventDefault();
  const size = document.querySelector("input[name='size']:checked").value;
  const cheese = document.querySelector("input[name='cheese-type']:checked").value;
  const cheeseAmt = document.querySelector("input[name='cheese-amt']:checked").value;
  const toppingsSelected = document.querySelectorAll("input[name='topping']:checked");
  const drinksSelected = document.querySelectorAll("input[name='drink']:checked");
  const othersSelected = document.querySelectorAll("input[name='other']:checked");
  
  const toppings = getInputValue(toppingsSelected);
  const drinks = getInputValue(drinksSelected);
  const others = getInputValue(othersSelected);

  

  const pizza1 = new Pizza(size, cheeseAmt, toppings, drinks, others, cheese);
  const cost = pizza1.totalCost();
  console.log(pizza1);
  console.log(cost);


  const myOrder = convertOrder(pizza1);
  const myCost = listCosts(myOrder);
  displayOrder(myOrder, myCost);
  displayCost(cost);
  easterEgg(cost);
}

function displayCost(cost){
  const subDisplay = document.querySelector("span#subtotal");
  const taxDisplay = document.querySelector("span#total-tax");
  const costDisplay = document.querySelector("span#total-cost");
  let sub = cost * 0.8;
  let tax = sub * 0.25;

  sub = "$" + sub.toFixed(2);
  tax = "$" + tax.toFixed(2);
  cost = "$" + cost.toFixed(2);
  subDisplay.innerText = sub;
  taxDisplay.innerText = tax;
  costDisplay.innerText = cost;

}

function convertOrder(order){
  const processArray = Object.values(order);
  const convertedArray = [];
  processArray.forEach(function(element){
    if(Array.isArray(element)){
      console.log("found array");
      const subArray = Object.values(element);
      subArray.forEach(function(element){
        convertedArray.push(element);
        console.log("pushing " + element);
      });
    } else {
      convertedArray.push(element);
      console.log("pushing " + element);
    }
  });
  return convertedArray;
}

function listCosts(convertedArray){
  const listArray = []
  convertedArray.forEach(function(element){
    switch (element) {
      case("lt-cheese"):
        listArray.push("1.616");
        break;
      case("coke"):
      case("rootbeer"):
      case("cider"):
        listArray.push("2");
        break;
      case("md-cheese"):
      case("sm-size"):
      case("md-size"):
      case("slurm"):
      case("popplers-cup"):
      case("space-honey"):
      case("can-ranch"):
      case("can-garlic"):
      case("cheese-weasel"):
        listArray.push("5");
        break;
      case("lg-cheese"):
      case("lg-size"):
      case("lobrau"):
      case("pbr"):
      case("fortran"):
      case("millennia-cake"):
      case("spice-weasel"):
        listArray.push("10");
        break;
      case("x-cheese"):
        listArray.push("25");
        break;
      case("xx-cheese"):
        listArray.push("50");
        break;
      case("xxx-cheese"):
        listArray.push("69");
        break;
      case("mozzerella"):
      case("provolone"):
      case("cheddar"):
        listArray.push("");
        break;
      default:
        listArray.push("2");
    }
  });

  return(listArray);
}

function displayOrder(order, costs){
  const orderList = document.createElement("ol");

  for (let i=0; i < order.length; i++){
    const li = document.createElement("li");
    li.innerText = order[i] + "..." + costs[i];
    orderList.append(li);
  }
  let orderDisplay = document.getElementById("order-list");
  orderDisplay.append(orderList);
}

function easterEgg(cost){
  const headerImage= document.getElementById("header-image");
  if (cost === 10.77){
    headerImage.setAttribute("src", "images/easteregg.png");
    headerImage.setAttribute("alt", "Just like my pin number!");
  }
}

// medium pizza light cheese 6.16
// small pizza  5
// medium pizza 5
// large pizza 15
//light cheese 1.16
// medium cheese 5
// heavy cheese 10
// x cheese 25
// xx cheese 50
// xxx cheese 69


// toppings 2 each 
  //unless sardines, 10,000,000
  // later, if price > 9,000,000, we'll display something else?

// coke, rootbeer, cider 2
// slurm 5
//beer 10

//millennia cake 10
//poppler cup 5
