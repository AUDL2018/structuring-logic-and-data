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

let drinks(
  new Drink(cosmo, 50, [vodka, cointreau, lime, cranberry]),
  new Drink(tequlia, 20, [tequila, lemon]),
  new Drink(mojito, 90, [rum, mint, lime, syrup, soda]),
  new Drink(white russian, 70, [vodka, khalua, milk]),
  new Drink(whisky sour, 80, [whisky, syrup, lemon, eggwhite, agustura])
)

console.log('What would you like to drink? We have ', drinks());

console.log('If you are poor, I recommend ', drinks.filter(drink => drink.price < 50));
