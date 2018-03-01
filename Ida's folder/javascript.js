// Hello World!
console.log('Idas Branch!')

function Driver(name, age){
  this.name = name,
  this.age = age,
  this.legal = function(){

    console.log('Hello, my name is ' + this.name + 'I am ' + this.age + 'years old!')

  }
}

let charlie = new Driver('Charlie', '17')

charlie.legal(age => 18)
