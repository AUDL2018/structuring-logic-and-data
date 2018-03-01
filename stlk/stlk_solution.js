function Drink(name, cocktail, ingridients) {
	this.name = name;
	this.cocktail = cocktail;
	this.ingridients = ingridients
}

let sct = {
	name: "Scotch",
	cocktail: false,
	ingridients: ["Henky Bennister", "Jameson"]
};


let myDrink2 = new Drink(
	"Vodka Cola", 
	true, 
	["Henky Bennister", "Jameson"])

console.log(myDrink2);