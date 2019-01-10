const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/a8a4336a6db41b44fddacbebfd0a69ea/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature,
				timezone: body.timezone
			});
		} else {
			callback('Unable to fetch weather');
		}
	});
}

module.exports = {
	getWeather
}