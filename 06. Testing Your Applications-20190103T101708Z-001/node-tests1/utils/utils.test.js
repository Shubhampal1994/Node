const utils = require('./utils');


it('should add two numbers', () => {
	var res = utils.add(33, -4);

	if (res != 29) {
		throw new Error(`Expected 29, but got ${res}`);
	}
});


it('should return square', () => {
	var res = utils.square(5);

	if (res != 25) {
		throw new Error(`Expected result: 25. Got: ${res}`);
	}
});