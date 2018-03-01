// Hello World!
console.log('Hello World!')

function addition (a, b) {
  console.log (a + b)
}

addition(5, 5)

/* how to do objects (let emptyObject ={ name = Sonia city = Aarhus })
let PersonObject = { name: city:}
PersonObject.name => Sonia
This is called object litterel
You can also do a lot of proberties in the same object.
Eksample:
*/

function Drink (name, price, engredients){
this.name = name
this.price = price
this.engredients = engredients
}
let sunrise = new Drink('Sunrise', 47, ['vodka', 'Juice'])

console.log(sunrise)

//Exersise 3
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.canIDriveInDenmark = function () {
    if (this.age>=18) {
    return true
  }
  else {
    return false
  }
}
}
let sonia = new Person('Sonia', 24);
console.log ('Can I drive?', sonia.canIDriveInDenmark());

//Exersise with gifts

const Gift = (description, type, price) => {
  return { description, type, price }
}
let gifts = [
  Gift('Teddy Bear', 'Toy', 45),
  Gift('Camera', 'Gadget', 200)
]
console.log('Gadget gifts full', gifts.filter(function (gift){
  return gift.type == 'Gadget'
}))

//Exersise 4
const Drink = (name, price, engredients) => {
  return { name, price, engredients }
}
let drinks = [
  Drink('Sunrise', 47, ['vodka', 'juice']),
  Drink('Horse', 65, ['vodka', 'lemon', 'water']),
  Drink('HotSpot', 36, ['rom', 'juice']),
  Drink('Funny', 43, ['vodka', 'rom']),
  Drink('NiceOne', 76, ['vodka', 'rom' 'juice'])
]
console.log('Drinks below 50 kr.', drinks.filter(function (drink => drink.price = <50){
  return drink.price == <50
}))
