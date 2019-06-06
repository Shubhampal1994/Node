var square = x => x * x;

console.log(square(5));

var user ={
	name: "Andrew",
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hello ${this.name}`);
	}
};

user.sayHiAlt(1,2,3);
