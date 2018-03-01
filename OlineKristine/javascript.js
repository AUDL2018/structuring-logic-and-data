// Hello World!
console.log('Hello World!')
function addition (a, b) {


console.log(a + b)

}
addition(4,5)

function getHelloGreeting(name) {
  return `Hello ${name}!`

}

console.log('greeting', getHelloGreeting('ASD'))

function drink (name, price, ingredients){
  this.name = name
  this.price = price
  this.ingredients = ingredients
}

let myDrink = new drink ('Screwdriver', 50, ['Orangejuice', 'Vodka' ])
console.log(myDrink)
