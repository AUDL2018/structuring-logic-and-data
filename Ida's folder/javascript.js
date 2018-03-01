// Hello World!
console.log('Idas Branch!')

function Driver(name, age){
  this.name = name;
  this.age = age;
  this.legal = function(){
    return this.age >= 18
}

let charlie = new Driver('Charlie', '17')

console.log('Hello, my name is ' + this.name + 'I am ' + this.age + 'years old!');
console.log('Can you drive?', charlie.Driver());

// Speech

function Robot(name){
  this.name = name;
  this.say = function(text = `hello, my name is ${this.name}`) {
    let msg = new SpeechSynthesisUtteracne(text)
    mag.lang = 'en-US'

    window.SpeechSynthesis.speak(msg)
  }
}

// Drink Array

function Drink(name, price, ingredients){
  this.name = name,
  this.price = price,
  this.ingredients = ingredients
}

drinks(
  new Drink(cosmo, 50, vodka),
  new Drink(tequlia, 20, lemon),
  new Drink(mojito, 90, lime),
  new Drink(white russian, 70, milk),
  new Drink(whisky sour, 80, lemon)
)


let myDrink = new Drink('Cosmo', '90', 'vodka')
