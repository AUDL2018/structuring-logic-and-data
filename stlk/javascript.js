// Hello World!
'strict use';
console.log('Hello World!')

function part1() {
	

	function sayHello(name = "Default Name") {
		console.log("Hello!" + name);
	}

	sayHello();

	function addition(a,b) {
		console.log(a + b);
	}

	addition(3,5);

	function getHelloGreeting(name = "DFLT") {
		// return "Hello ${name}"
		return "Hello" + name // returns nothing to console
	}

	getHelloGreeting();

	let greetings = getHelloGreeting();
	console.log(greetings);
}

part1();

function part2() {
	let arrowGreeting = (name = "DefaultPART2") => {
		console.log("Hello %{name}");
	}
}

part2();

// function


let emptyObject = {
	name: "Henning",
	city: "Århus",
	favourites: {
		cars: [
		"Tesla",
		"Volvo"
		],
		artists: [
		"Bon Iver"
		]
	}
}


function Drink(name, cocktail) {
	this.name = name;
b	this.cocktail = cocktail;
}

let Drink = {
	name: "Scotch",
	cocktail: false
};



function Parrot(name) {
	this.name = name
	// body...

	this.sayHello = function (extra) {
		// body...
		console.log("Hello" + this.name)
	}
}


function Person(name, tabula) {
	this.name = name
	this.age = age
	// body...

	this.canIDrivenInDenmark = function (tabula) {
		if (this.age) {
			return true
		} else {
			return false
		}
		// body...
	}
}