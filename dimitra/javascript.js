// Hello World!
console.log('Hello World!')

//create an object constructor for a drink object
//the constructor needs 3 parameters
function drink (name, price, incredients) {
  this.name = name
  this.price = price
  this.incredients = incredients
}

let bluelagoon = new drink ('blue lagoon', '100kr', ['vodka', 'curacao liquor', 'lemonade']);
console.log ('testing', bluelagoon)
