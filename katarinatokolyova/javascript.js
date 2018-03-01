
let a = 100

function addition (a,b) {
  console.log(a+b)
}

addition (a,2)

function getHelloGreeting(name){
  return `Hello ${name}!`
}

let greeting = getHelloGreeting('Katarina')
console.log('greeting',getHelloGreeting('Katarina'))
divider()


//about objects
let PersonObject = {
  name: 'Katarina Tokolyova',
  city: 'Aarhus',
  favorites:{
    food:[
      'cheese',
      'bread',
    ],
    drink:[
      'coffee',
      'water',
    ]
  }
}

/* access properties by:
PersonObject.name=>'Katarina Tokolyova'
PersonObject.favorites.food => ['cheese','bread']
PersonObject.favorites.drink[1] => 'coffee'
*/
console.log('PersonObject',PersonObject)
divider()



function Person (name, city, age){
  this.name = name
  this.city = city
  this.age = age
}

let p {
  name: 'Katarina Tokolyova',
  city: 'Aarhus',
  age: '22',
}

let myPerson = new Person ('Katarina Tokolyova', 'Aarhus', 28)
console.log ('myPerson', myPerson)
divider()


console.log('DrinkObject',DrinkObject)
divider()



function Drink (name, price, ingredients){
  this.name = name
  this.price = price
  this.ingredients = ingredients
}

let p = {
  name: 'Gin Tonic',
  price: '52',
  ingredients:[
    'gin',
    'tonic',
    'lime',
  ]
}

let myDrink = new Drink ('Gin Tonic', 52, 'ingredient')
console.log ('myDrink', myDrink)
divider()
