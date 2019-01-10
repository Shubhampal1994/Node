const yargs = require('yargs');
const axios = require('axios');

// I am fetching email address
// Sample email address: Sincere@april.biz

//API KEY : a8a4336a6db41b44fddacbebfd0a69ea

const argv = yargs
	.options({
		a: {
			describe: 'Address to fetch weather for',
			demand: true,
			alias: 'address',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

console.log(`Queried address: ${argv.address}`);

var geocodeUrl = `https://jsonplaceholder.typicode.com/users?email=${argv.address}`;

axios.get(geocodeUrl).then((response) => {
	var lat = response.data[0].address.geo.lat;
	var lng = response.data[0].address.geo.lng;
	var weatherUrl = `https://api.darksky.net/forecast/a8a4336a6db41b44fddacbebfd0a69ea/${lat},${lng}`;
	var loc_address = response.data[0].address;
	console.log(`Address: ${loc_address.street}, ${loc_address.suite}, ${loc_address.city}, ${loc_address.zipcode}`);
	return axios.get(weatherUrl);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It fells like ${apparentTemperature}`);
}).catch((e) => {
	// console.log('Unable to connect to the server');
	console.log(`Error: ${e.message}`);
});

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(results.address);
// 		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
// 			if (errorMessage) {
// 				console.log(errorMessage);
// 			} else {
// 				console.log(`The actual temperature in ${weatherResults.timezone}: ${weatherResults.temperature}°c`);
// 				console.log(`And it feels like: ${weatherResults.apparentTemperature}°c`);
// 			}
// 		});		
// 	}
// });
