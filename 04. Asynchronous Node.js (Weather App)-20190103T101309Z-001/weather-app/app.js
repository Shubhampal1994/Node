const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address);
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(`The actual temperature in ${weatherResults.timezone}: ${weatherResults.temperature}°c`);
				console.log(`And it feels like: ${weatherResults.apparentTemperature}°c`);
			}
		});		
	}
});
