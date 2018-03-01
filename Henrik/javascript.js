// Hello World!
/*
function addition (a, b) {

  result = a + b;
  console.log(result);
}

let arrowGreeting = (name) => {
  console.log("hello " + name);
}

arrowGreeting("Henrik");


//function declarations are available within global scope

//objects
//object literal defines object right away
//Below is a nested object as well
/*let person1 = {
  name: "Henrik",
  city: "Aarhus",
  favorites: {
    books: ["Day one", "day two"]
  }
}
console.log("test", person.favorites.books[1]);*/

//Alternatively u can use constructor functions. If u want multiple objects of same kind for example
//this references the object ure creating
/*function Person(name, city, age) {
  this.name=name
  this.city=city
  this.age=age
}
let henrik = new person ("henrik", "Aarhus", 24)
console.log("henrik", henrik)


function Drink (name, price, ingridients) {
  this.name=name
  this.price=price
  this.ingridients=ingridients
}
let dryMartini = new drink("dry martini", "50kr", ["gin", "white vermouth", "garnish"]);
console.log(dryMartini)*/


//objects can have functions as well

/*function newPerson (name, age) {
  this.name = name;
  this.age = age;
  this.canIDrive = function() {
    if (this.age>=18) {
      //you could also simply do : return this.age >=18
      return true
    }
    else {
      return false
    }
  }
}
let henrik = new newPerson("Henrik", 24);
console.log("can Henrik Drive?", henrik.canIDrive());*/



//U can filter objects from an array
/*
function Drink (name, price, ingridients) {
  this.name=name
  this.price=price
  this.ingridients=ingridients
}


let drinks = [
  new Drink("dry martini", 50, ["gin", "white vermouth"]),
  new Drink("drink1", 200, ["vodka", "milk"]),
  new Drink("drink2", 300, ["Coconut", "wine"]),
  new Drink("drink3", 150, ["soda", "rum"]),
  new Drink("drink4", 400, ["flowers", "milk"])
]
console.log("filtering", drinks.filter(Drink => Drink.price<300))*/
/*if u wanted to change the currency to USD use the map function. like:
drinks.map(=> {
  do things with the objects, like adding more properties
  return something;
})*/
