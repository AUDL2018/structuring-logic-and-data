// Hello World!
console.log('Hello World!')


function addition (a, b) {
}

addition (5, 5)


//Exercise

function Drink (name, price, ingredients) {
  this.name = name
  this.price = price
  this.ingredients = ingredients
}

let sunrise = new Drink ('Sunrise', 50, ['Tequila', 'Lemon'])  //correct

console.log(sunrise)


//New Exercise

function Person (name, age) {
  this.name = name
  this.age = age

  this.canIDriveInDK = function() {
    age > 18

  }

}

let john = new Person ('John', 20)
console.log(john.canIDriveInDK)
