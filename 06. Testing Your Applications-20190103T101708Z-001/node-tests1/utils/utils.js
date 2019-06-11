var add = (a, b) => a + b;


var asyncAdd = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 1000);
};

var square = (x) => x * x;

var asyncSquare = (a, callback) => {
	setTimeout(() => {
		callback(a * a);
	}, 1000);
};

var setName = (user, fullName) => {
	var nameArray = fullName.split(' ');
	user.firstName = nameArray[0];
	user.lastName = nameArray[1];
	return user;
};

module.exports = {
	add,
	square,
	setName,
	asyncAdd,
	asyncSquare
}
