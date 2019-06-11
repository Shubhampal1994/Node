const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: "Page not found.",
		name: "Todo App v1.0"
	});
	// res.status(404).send('Hello World!');
});

app.get('/user', (req, res) => {
	res.status(200).send([
		{name: 'shubham', age: 25},
		{name: 'ram', age: 25},
		{name: 'shivangi', age: 26}
	]);
});

app.listen(3000);

module.exports = {
	app
}
