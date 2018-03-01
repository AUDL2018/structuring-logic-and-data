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

let sunrise = new Drink ('Sunrise', 50, ['Tequila', 'Lemon'])

console.log(sunrise)
