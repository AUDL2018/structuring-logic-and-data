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
