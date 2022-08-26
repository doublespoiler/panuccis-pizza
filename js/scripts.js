function Pizza(size, cheese, toppings, drinks, other) {
  this.size = size;
  this.cheese = cheese;
  this.toppings = toppings;
  this.drinks = drinks;
  this.other = other;
}

Pizza.prototype.totalCost = function(){
  const tax = 1.25;
  let total = 0;
  if (this.size === "lg-size"){
    total += 15;
  } else {
    total += 5; 
  }

  
  switch (this.cheese) {
    case("lt-cheese"):
      total += 1.16;
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

  this.toppings.forEach(function(){
    total += 2;
  });

  this.drinks.forEach(function(element){
    switch (element) {
      case("coke"):
      case("rootbeer"):
      case("cider"):
        total += 2
        break;
      case("lobrau"):
      case("pbr"):
      case("fortran"):
        total += 10;
        break;
      case("slurm"):
        total += 5;
    }
  })

  this.other.forEach(function(element){
    switch (element) {
      case("millennia-cake"):
      case("spice-weasel"):
        total += 10;
        break;
      case("popplers-cup"):
      case("soylent-coleslaw"):
      case("can-ranch"):
      case("can-garlic"):
      case("cheese-weasel"):
        total += 5;
        break;
    }
  })

  total *= tax;
  return total;
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
