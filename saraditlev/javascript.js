// Hello World!
console.log('Hello World!')
/*
//Example 1
function addition (a, b){
  console.log (a+b);
}
addition (5,5);
*/

//Example 2 - constructor
/*
  //solution:
function Drink(name, price, ingredients) {
  this.name = name;
  this.price = price;
  this.ingredients = ingredients;
}

let firstDrink = new Drink('G&T', 25, ['gin' , 'tonic']);
console.log (firstDrink);
*/
function Drink (name, price, ingredients){
  this.name = name,
  this.price = price,
  this.ingredients = ingredients
}
let drinks = [
 new Drink ('Tea', 10, ['white, green, or black tea', 'hot water']),
 new Drink ('Latte', 30, ['espresso', 'steamed milk']),
 new Drink ('Orange juice', 15, ['orange juice']),
 new Drink ('Strawberry smoothie', 25, ['Strawberries', 'milk', 'ice']),
 new Drink ('Hot Chocolate', 30, ['Chocolate', 'milk, hot'])
]

console.log('drinks under 25', drinks.filter( drink => drink.price < 30));




/*
//Example 3 - note: placed console.log wrong (in the function, not outside)
function Person (name, age){
  this.name = name;
  this.age = age;

  this.canIDriveInDK = function(){
    //simple
    return this.age > 18;
    //complex
    /*
    if (this.age < 18) {
      return false;
    } else {
      return true;
    }
  }
}

let me = new Person ('Sara', 24);
console.log ('Can I Drive? ' + me.canIDriveInDK());


*/
