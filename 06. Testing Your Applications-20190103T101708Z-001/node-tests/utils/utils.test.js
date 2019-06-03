const expect = require('except');

const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(2, 1);

	// if (res !== 3) {
	// 	throw new Error(`Expected 3, but got ${res}.`)
	// }
});

it('should square a number', () => {
	var res = utils.square(10);

	if (res !== 100) {
		throw new Error(`Expected 100, but got ${res}.`)
	}
});
