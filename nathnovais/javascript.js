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

//Create a person object constructor, 2 parameters: name(string), age(integer) -> real values are arguments
//(argument is the value and parameters is what defines the function)
//One method: canIDriveInDenmark() => check if age is abot or equal 18
//return true or false


function Person(name, age) {
  this.name = name
  this.age = age
  this.canIDriveInDenmark = function() {
    if(age => 18) {
      console.log('You are allowed to drive in Denmark')
    }  else {
        console.log('You are not allowed to drive in Denmark')
    }
}
}
let myPerson = new Person('Nathalia', 31)
console.log(Person.canIDriveInDenmark)
