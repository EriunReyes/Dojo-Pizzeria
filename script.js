// Pizza number 1
function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}


var ingredients1 = pizzaOven("deep dish", "traditional","mozarella", ["pepperoni, sausage"]);
console.log(ingredients1);

//pizza number 2
function pizzaOven2(crustType2, sauceType2, cheese2, toppings2) {
    var pizza2 = {};
    pizza2.crustType2 = crustType2;
    pizza2.sauceType2 = sauceType2;
    pizza2.cheese2 = cheese2;
    pizza2.toppings2 = toppings2;
    return pizza2;
}
var ingredients2 = pizzaOven2("hand tossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(ingredients2);


//pizza number 3
function pizzaOven3(crustType3, sauceType3, cheese3, toppings3) {
    var pizza3 = {};
    pizza3.crustType3 = crustType3;
    pizza3.sauceType3 = sauceType3;
    pizza3.cheese3 = cheese3;
    pizza3.toppings3 = toppings3;
    return pizza3;
}
var ingredients3 = pizzaOven3("hand tossed", "marinara", ["mozarella", "feta"], ["jam", "pineapples"]);
console.log(ingredients3);


// //pizza number 4
function pizzaOven4(crustType4, sauceType4, cheese4, toppings4) {
    var pizza4 = {};
    pizza4.crustType4 = crustType4;
    pizza4.sauceType4 = sauceType4;
    pizza4.cheese4 = cheese4;
    pizza4.toppings4 = toppings4;
    return pizza4;
}
var ingredients4 = pizzaOven4("hand tossed", "marinara", ["mozarella", "feta"], ["pickles", "jelly"]);
console.log(ingredients4);

//Random Pizza
function randomPizza(crustTypeR, sauceTypeR, cheeseR, toppingsR) {
    var pizzaR = {};
    pizzaR.crustTypeR = crustTypeR[Math.floor(crustTypeR.length * Math.random())];
    pizzaR.sauceTypeR = sauceTypeR[Math.floor(sauceTypeR.length * Math.random())];
    pizzaR.cheeseR = cheeseR[Math.floor(cheeseR.length * Math.random())];
    pizzaR.toppingsR = toppingsR[Math.floor(toppingsR.length * Math.random())];
    return pizzaR;
}
var ingredientsR = randomPizza(["hand tossed", "pan pizza"], ["marinara", "spaguetti", "tomatoes"], ["mozarella", "feta","extra cheese"], ["jelly", "bacon", "fish"]);
console.log(ingredientsR);
