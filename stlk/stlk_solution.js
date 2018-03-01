function Drink(name, cocktail, ingridients, price) {
	this.name = name;
	this.cocktail = cocktail;
	this.ingridients = ingridients;
	this.price = price
}


let myDrink2 = new Drink(
	"Vodka Cola", 
	true, 
	["Henky Bennister", "Jameson"],
	356)

let myDrink3 = new Drink(
	"Vodka Cola", 
	true, 
	["Henky Bennister", "Jameson"],
	356)

let drinks = [
	new Drink("Vodka Cola", true, ["Henky Bennister", "Jameson"], 356),
	new Drink("Shot", false, ["Vodka"], 48),
	new Drink("Cuba Libra", true, ["Rum", "Juice"], 4000),
]


console.log(drinks.filter(drinks => drinks.price <= 50));