const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

	describe('#add', () => {
		it('should add two numbers', () => {
			var res = utils.add(33, -4);

			expect(res).toBe(29).toBeA('number');
		});
	});

	it('should return square', () => {
		var res = utils.square(5);

		expect(res).toBe(25).toBeA('number');
	});

	it('should set firstName and lastName', () => {
		var userObject = {
			age: 25,
			location: 'Noida'
		}
		var name = 'Shubham Paliwal';
		var nameArray = name.split(' ');

		var res = utils.setName(userObject, name);

		expect(res).toInclude({
			firstName: nameArray[0],
			lastName: nameArray[1]
		}).toBeA('object');
	});

	it('should async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});

	it('should async return square', (done) => {
		utils.asyncSquare(4, (square) => {
			expect(square).toBe(16).toBeA('number');
			done();
		});
	});
});


// it('should expect some value', () => {
// 	// expect(12).toNotBe(12);

// 	// expect({name: 'Shubham'}).toNotEqual({name: 'Shubham1'});

// 	// expect([2,3,4]).toInclude(4);

// 	// expect([2,3,4]).toExclude(5);

// 	// expect({
// 	// 	name: 'Shubham',
// 	// 	age: 25,
// 	// 	location: 'Noida'
// 	// }).toInclude({
// 	// 	age: 24
// 	// });

// 	expect({
// 		name: 'Shubham',
// 		age: 25,
// 		location: 'Noida'
// 	}).toExclude({
// 		age: 24
// 	});
// });
