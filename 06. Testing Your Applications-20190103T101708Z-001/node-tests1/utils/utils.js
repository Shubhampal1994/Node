var add = (a, b) => a + b;

var square = (x) => x * x;

var setName = (user, fullName) => {
	var nameArray = fullName.split(' ');
	user.firstName = nameArray[0];
	user.lastName = nameArray[1];
	return user;
};

module.exports = {
	add,
	square,
	setName
}

setName('user', 'Shubham Paliwal');
