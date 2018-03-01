function Person(name, age) {
	this.name = name
	this.age = age

	this.canIDrivenInDenmark = function () {
		this.age >= 18
	}
}

let person = new Person("HN", 18);

console.log(person.canIDrivenInDenmark());