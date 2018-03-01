// Hello World!
/*
console.log('Hello World!')

// Function with parameter and without return statement //

function sayHelloYo(name = 'DEFAULT NAME')
console.log('Hello ' + name)

}

// function with two parameters a + b
let a = 5;
let b = 6;
function addition(a, b) {
console.log(a + b)

}
addition(a, b)

// return value

function getHelloGreeting(name) {
  return 'Hello ' + name
}

//let's test it. this function will return a string
let greeting = ' '
console.log('greeting', greeting)
divider()
}

// declaration - define function before you call it
const functionExpression = function () {
  console.log('Did a thing')
}

// can only be run after the above statement

functionExpression()

// About objects
// object literal - define object right away - use curly braces, when defining object
// way of constructing a bit more complex data
// a nested property within the property cars

let PersonObject = {
  name: 'Anne',
  city: 'Aarhus',

  // an object, within an objects
  favourites: {
    cars: [
      'Tesla'
      'Volvo'
    ]
  }
// To access properties by:
PersonObject.name => 'Anne Andersen'
PersonObject.favourites.cars => ['Tesla', 'Volvo']
PersonObject.favourites.cars[1] //Will return the first in a row

console.log('PersonObject', PersonObject)

}

// constructor functionExpression - creating multiple objects of the same kind
function Person(name, city, age) {
  this.name = name
  this.city = city
  this.age = age
}

 let p = {
   name: 'Anne',
   city: 'Aarhus',
   age: 25
 }

// create new object - use the keyword new Array

let myPerson = new Person('Anne', 'Aarhus', 25)
console.log('myPerson', myPerson)
divider()

// create constructor with parameters + an array
// create a object constructor for a Drink objects
// The constructor needs 3 parameters; name (String), price (Integer), ingredients (Array)

*/
function Drink (name, price, ingredients) {
this.name = name
this.price = price
this.ingredients = ingredients

let myDrink = new Drink('margarita', 85, ['tequila', 'lime', 'sugar'])
console.log('My drink', myDrink)

let drinks = [
  new Drink ('White russian', 45),
  new Drink ('Cosmopolitan', 80),
  new Drink ('Strawberry Daquiri', 50),
  new Drink ('Long Island Ice Tea', 45),
]
console.log('something', drinks.filter(function (currentDrink) {
  return (currentDrink.price < 60 && currentDrink.price > 30) || currentDrink.name == 'Cosmopolitan'
}))

// Same properties as the variables

function part9() {
  let name = 'Anne'
  let age = 25
  let city = 'Aarhus'

  let newPerson = {name: name, age: age, the_city: city}

}

// object with built-in method
// properties containing a function
//divider = costum function
function Parrot(name) {
  this.name = name
  this.sayHello = function () {
    console.log('Hello, my name is ' + this.name)

  }
}

let charlie = new Parrot('Charlie')
charlie.sayHello(' asd asda sd as')
divider()
}

//Create a Person object constructor,
// 2 parameters: name (String), age (integer)
// One method: canIDriveInDenmark() => chech if age is above or equal ti 18
// return either true or false
//one way of adding a method to an object

function Person(name, age) 
this.name = name
this.age = age

this.canIDriveInDenmark = function() {
if (this.age >= 18);
return true
} else {
return false
  }
}

let Anne = new Person("Anne", 25);
console.log('Can Anne drive?', Anne.canIDriveInDenmark());


// Reuse the drink object
// add 5 drinks to an Array
// use the buil-in filter method on the array to only display drinks that are
// priced below 50
// Print the result to the console (Se længere oppe)
