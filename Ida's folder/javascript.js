// Hello World!
console.log('Idas Branch!')

function Parrot(name){
  this.name = name

  this.sayHello = function(){

    console.log('Hello, my name is' + this.name)

  }
}

let charlie = new Parrot('Charlie')

charlie.sayHello()
