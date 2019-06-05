var getUser = (id, callback) => {
	var user = {
		id: id,
		name: 'Vikram'
	};

	setTImeout(() => {
		callback(user);
	}, 3000);
};

getUser(23, (user) => {
	console.log(user);
});

