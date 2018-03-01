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
    if (this.age >= 18) {
      return true
    }
    else {
      return false
    }
    //short version, could replace all the if/else:  return this.age >= 18
  }

}

let john = new Person ('John', 20)
console.log("Can the person drive? " + john.canIDriveInDK())


//NEW - using the Drink object

let meny = [
  new Drink('Coke', 30, ['Coke', 'Lemon']),
  new Drink('Spritzer', 40, ['White wine', 'Soda']),
  new Drink('Long Island', 60, ['Cola', 'Rum', 'A lot more']),
  new Drink('Vodka', 50, ['Vodka', 'Juice']),
  new Drink('New something', 30, ['Sprite', 'Lemon']),
]

console.log('Something with the meny of drinks', meny.filter(drink => drink.price < 50))
