// Parent object definition
const vehicle = {
	init({brand, type, plate}) {
		this.brand = brand;
		this.type = type;
		this.plate = plate;
	},
	describe() {
		console.log(`My brand is ${this.brand}, I'm a ${this.type} type vehicle and my plate number is ${this.plate}.`);
	},
	drive() {
		console.log(`I'm driving a ${this.brand}!!!`);
	},
	test() {
		let privateVariable = 'You cannot access me directly...';
		console.log(privateVariable);
	}
}

// Child object creation and instantiation
const car = Object.create(vehicle);
car.init(
	{
		brand: 'Mercedes',
		type: 'car',
		plate: 'FP 850 BL'
	}
);

// Polymorphism (i.e. method overriding)
car.drive = function() {
	console.log(`I'm driving a beautiful ${this.brand}!!!`);
}

// Parent method (looked up on the prototype)
car.describe();

// Child own method
car.drive();

// Example of encapsulation
car.privateVariable = 'Something else...'; // creating a different public variable
car.test(); // private is still intact

// Check prototype of child object (alternative to the use of instance of, for type checking)
console.log(car.__proto__ === vehicle);