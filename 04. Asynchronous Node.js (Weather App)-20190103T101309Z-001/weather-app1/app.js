const request = require('request');
const yargs = require('yargs');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Acress to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

request({
	url: 'https://jsonplaceholder.typicode.com/users',
	json: true
}, (error, response, body) => {
	if (error) {
		console.log('Unable to connect to Gooogle servers.');
	} else if (body.status === 'ZERO_RESULTS') {
		console.log("Unable to find that address.");
	}
	console.log(`Address: ${JSON.stringify(body[0].address)}`);
});

 // a8a4336a6db41b44fddacbebfd0a69ea