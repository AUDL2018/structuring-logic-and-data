

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




const Drinks = (name, price, ingredients) => {
  return { name, price, ingregredients}
  this.name = name
  this.price = price
  this.ingredients = ingredients
}

let drinks = [
new Drink ('Gin Tonic', 52, ['gin','tonic','lime'])
new Drink ('Moscow Mule', 63, ['vodka','ginger beer', 'lime'])
new Drink ('Irish Coffee', 49, ['whiskey','coffee','brown sugar','cream'])
new Drink ('Mojito', 53, 'rum' ,'water', 'lime', 'mint')
new Drink ('Coffee with Baileys', 49, 'baileys', 'coffee', 'cream')
]

console.log('drinks',drinks)
console.log('Drinks under 50 (incl)',drinks.filter(drink=>drink.price <=50))




//object with build in
function newPerson(name,age) {
  this.name = name
  this.age = age
  this.canIDrive = function() {
    if (this.age>=18){
      return true
    }
    else {
      return false
      }
    }
  }

  let katarina = new newPerson ("Katarina", 22);
  console.log ('Can Katarina drive?', katarina.canIDrive());


/*Let's make parrot actually speak
function Parrot(name){
  this.name = name

  this.say = function
}
*/


let colors = ['Red','Green','Blue']

let color = color[1]

console.log('How many elements', color.length)




const Gift = (description, type, price) => {
  this.description
}
