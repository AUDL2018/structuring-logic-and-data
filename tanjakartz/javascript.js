// Hello World!
console.log('Hello World!')

/**
function addition(a, b) {
console.log(a + b)
}
addition (5, 5) // if you put numbers in here it will override other things like let a= 100




//Returning a value

function geHelloGreeting(name) {
//´Hello '${name}´ is the same as writing hello + name
}


///////////function expressions and function declaration/////////////

function functionDeclaration(){
  console.log('Did something')
}

const functionExpression = functio (){
  console.log ('Did a thing')
//can only be run after the above statement
}


//////////////////Creating properties inside propertioes/////////////////////
let emptyObject = {
  name: 'Tanja',
  city: 'Aarhus',
  favorite: {
    cars: [
      'tesla',
      'volvo',
    ]
    artists: [
      'bon jovi',
      'keaton henson',
    ]
  }
}

// personObject.favorite.cars => ['tesla', 'volvo']

console.log('personObject', PersonObject){
divider()
}

///////////////////object literal//////////////////////
function Person(name, city, age) {
this.name = name       //use this. to save something
this.city = city
this.age = age
}

//create anstance of an object = new

let myPerson = new Person ('Tanja Johansen', 'Aarhus', 23)
console.log(myPerson, myPerson)
devider()

**/

/////////////create an object constructor for a Drink emptyObject
////////// the costructor needs 3 parameter: name (string), price (Integer, ingredients (Array)

function Drink(name, price, ingredients) {
  this.name = name
  this.price = price
  this.ingredients = ingredients
}

let myDrink = new Drink ('Mojito', 80, ['lime', 'ice', 'rum', 'mint', 'sparkling water'])
console.log(myDrink)
