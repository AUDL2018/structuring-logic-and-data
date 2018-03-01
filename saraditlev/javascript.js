// Hello World!
console.log('Hello World!')

//Example 1
function addition (a, b){
  console.log (a+b);
}
addition (5,5);


//Example 2 - constructor
function Drink (name, price, ingredients){
  this.name = name,
  this.price = price,
  this.ingredients = ingredients
}

let ginAndTonic = new Drink ('Gin and Tonic', 25, ['gin', 'tonic']);
console.log(ginAndTonic);
