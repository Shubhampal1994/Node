const request = require('request');

var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		
		var request_url = `https://jsonplaceholder.typicode.com/users?email=${address}`;
		request({
			url: request_url,
			json: true
		}, (error, response, body) => {
			if(!error && response.statusCode === 200 && body.length != 0) {
				var address = body[0].address;
				resolve({
					address: `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`,
					latitude: body[0].address.geo.lat,
					longitude: body[0].address.geo.lng
				});
			} else {
				reject('Unable to fetch the User');
			}
		});
	});
};

geocodeAddress('Sincere@april.biz').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});

/////////////

// const request = require('request');

// var geocodeAddress = (address, callback) => {
// 	var request_url = `https://jsonplaceholder.typicode.com/users?email=${address}`;

// 	request({
// 		url: request_url,
// 		json: true
// 	}, (error, response, body) => {
// 		if(!error && response.statusCode === 200) {
// 			var address = body[0].address;
// 			callback(undefined, {
// 				address: `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`,
// 				latitude: body[0].address.geo.lat,
// 				longitude: body[0].address.geo.lng
// 			})
// 		} else {
// 			callback('Unable to fetch the User');
// 		}
// 	});
// };

// geocodeInitiator = (address, (errorMessage, location) => {
// 	return new Promise((resolve, reject) => {
// 		if (errorMessage) {
// 			reject(errorMessage);
// 		} else {
// 			resolve(location);
// 		}
// 	});
// });

///////////////

		// getWeather(location.latitude, location.longitude, (errorMessage, weatherResults) => {
		// 	if (errorMessage) {
		// 		console.log(errorMessage);
		// 	} else {
		// 		console.log(`The actual temperature in ${weatherResults.timezone}: ${weatherResults.temperature}°c`);
		// 		console.log(`And it feels like: ${weatherResults.apparentTemperature}°c`);
		// 	}
		// });

// var getWeather = (lat, lng, callback) => {
// 	request({
// 		url: `https://api.darksky.net/forecast/a8a4336a6db41b44fddacbebfd0a69ea/${lat},${lng}`,
// 		json: true
// 	}, (error, response, body) => {
// 		if (!error && response.statusCode === 200) {
// 			callback(undefined, {
// 				temperature: body.currently.temperature,
// 				apparentTemperature: body.currently.apparentTemperature,
// 				timezone: body.timezone
// 			});
// 		} else {
// 			callback('Unable to fetch weather information');
// 		}
// 	});
// }