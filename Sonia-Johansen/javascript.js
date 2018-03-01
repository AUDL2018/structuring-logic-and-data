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


function Person(name, age) {
  this.name = name
  this.age = age

  this.canIDriveInDenmark = function () {
    let Boolean = true;
    if Boolean = >18
    console.log('You can drive in Denmark ' + this.name)
  }
}
let sonia = new Person('Sonia', 24)
sonia.canIDriveInDenmark()
