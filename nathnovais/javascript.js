// Hello World!
console.log('Hello World!')
/*
let a = 3
function addition (a, b) {
  console.log(a+b);
}
addition(3, 5)
addition(a, 5)

function divider() {
console.log('---------------------------')
}

function getHelloGreeting(name) {
  return 'Hello' + name
  return `Hello ${name}`

}
let PersonObject = {
  name: 'Hening Horn',
  city: 'Aarhus',
  favorites: {
    cars: [
      'Tesla',
      'Volvo'
    ],
  artists: [
    'Bon Iver',
    'Keaton henson',
    'Nephew'
  ]
  }
}

//accesing properties:
PersonObject.name
PersonObject.favorites.cars
PersonObject.favorites.artists[1]

console.log('PersonObject', PersonObject);


//constructor function
function person(name, city, age) {
  this.name = name
  this.city = city
  this.age = age
}

//creating an instance of an object (use keyword new)
let myPerson = new Person('Henning Horn', 'Aarhus', 28)
console.log('myPerson', myPerson);
*/

//creating a constructor of a drink object – name(string) price(integer) ingredients(Array)
function Drink(name, price, ingredients) {
  this.name = name
  this.price = price
  this.ingredients = ingredients
}

let myDrink = new Drink('margarita', 85, ['tequila', 'lime', 'sugar'])
console.log('My Drink:', myDrink);

//Reuse drink object, add 5 different drinks in array
//and use filter method to display drinks priced bellow 50


let drinks = [
  new Drink ('White russian', 45, ['milk, vodka']),
  new Drink ('Cosmopolitan', 60, ['vodka', 'cranberry juice']),
  new Drink ('long island ice tea', 70, ['vodka', 'coca cola', 'rum']),
  new Drink ('Strawberry Daquiri', 50, ['vodka', 'strawberry juice'])
]
//console.log('Drinks under 50kr', drinks.filter(Drink => Drink.price <= 50))
console.log('Some of the drinks', drinks.filter(function (currentDrink) {
  return (currentDrink.price <60 && currentDrink.price >=30)
}

//not working
Drinks.map(drink) => {
  if(drink.price > 50) {
    return 'expensive'
  } else {
    return 'cheap'
  }
}


//Create a person object constructor, 2 parameters: name(string), age(integer) -> real values are arguments
//(argument is the value and parameters is what defines the function)
//One method: canIDriveInDenmark() => check if age is abot or equal 18
//return true or false


/* function Person(name, age) {
  this.name = name
  this.age = age
  this.canIDriveInDenmark = function() {
    //return this.age >= 18
    if(age => 18) {
      //console.log('You are allowed to drive in Denmark')
      return true
    }  else {
        //console.log('You are not allowed to drive in Denmark')
        return false
    }
}
let myPerson = new Person('Nathalia', 31)
console.log('Can I Drive?', myPerson.canIDriveInDenmark()); */

/* parrot function
function parrot(name) {
  this.name = name

  this.say = function(text = `Hello, my name is ${this.name}`) {
    let msg = new SpeechSynthesisUtterance(text)
    msg.lang = 'en-US'
    //msg.voice = SpeechSynthesis.getVoice
    window.SpeechSynthesis.speak(msg)
  }
}

//another way of making constructors
const Gift = (description, type, price) => {
  return {description, type, price}
} */
