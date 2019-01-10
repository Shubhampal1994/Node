// var square = (x) => {
// 	var result = x * x;
// 	return result;
// };

var square = (x) => x * x;
console.log(square(2));

var user = {
	name: 'Shubham',
	sayHi: () => {
		console.log(`Hi ${this.name}`);
	},
	sayHello () {
		console.log(arguments);
		console.log(`Hi I'm ${this.name}`);
	}
};

user.sayHi();
user.sayHello(1,2,3);