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
let myDrink = new Drink('Funtimes', "10 kr", ['orange juice', 'red soda', 'mocai'])
console.log(myDrink)


function Parrot(name){
  this.name=name

this.sayHello = function(extra){
  console.log('Hello, my name is '+ this.name)
}
}

let Charlie = new Parrot('Charlie')
Charlie.sayHello()




function Person(name, age){
  this.name=name
  this.age=age

  /* short version:
  this.canIDriveInDenmark = function(){
    return this.age >= 18
    */
// long version:
this.canIDriveInDenmark = function(){
  if (this.age >= 18) {
    return true

  } else {
    return false

  }
}
}

let Rina = new Person("Rina", 24)
  console.log('Can Rina drive?', Rina.canIDriveInDenmark());





  function Drink(name, price, ingredients) {
  this.name=name
  this.price=price
  this.ingredients=ingredients
  }
  let drinks = [
  new  Drink('Funtimes', 10, ['orange juice', 'red soda', 'mocai']),
  new  Drink('Awesometimes', 12, ['apple juice', 'green soda', 'GD']),
  new  Drink('Greattimes', 22, ['multi juice', 'blue soda', 'baccardi']),
  new  Drink('Noisytimes', 131, ['pinapple juice', 'purple soda', 'vodka']),
  new  Drink('NonSobertimes', 55, ['mango juice', 'pink soda', 'whisky']),
]
  console.log('Drinks above 50 kr', drinks.filter(drink => drink.price > 30 && drink.price <60))
