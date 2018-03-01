// Hello World!
console.log('Hello World!')
function addition(a, b) {
console.log(a + b)
}
addition(1,10)

/*
function getGreeting(name) {
return ´Hello ${name}!´
//Hello' + name
  }

let greeting = getGreeting('Rina')
console.log('greeting', getGreeting)
*/
/*
let testObject = {
  name= 'Rina',
  city = 'Aarhus C',
  favorites: {
    superheroes: [
      'Nightwing',
      'Batman'
    ]
    }

// testObject.favorites.superheroes => ['Nightwing, 'Batman']
console.log('testObject', testObject.favorites.superheroes)
}
*/


function Drink(name, price, ingredients) {
this.name=name
this.price=price
this.ingredients=ingredients
}
//let myIngredient= new ingredients['gin','tonic']
let myDrink = new Drink('Funtimes', 10, ['orange juice', 'red soda', 'mocai'])
console.log(myDrink)
