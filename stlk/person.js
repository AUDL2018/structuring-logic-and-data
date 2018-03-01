function Person(name, age) {
	this.name = name
	this.age = age
	// body...

	this.canIDrivenInDenmark = function () {
		if (this.age >= 18) {
			return true
		} else {
			return false
		}
		// body...
	}
}

let person = new Person("HN", 18);

console.log(person.canIDrivenInDenmark());