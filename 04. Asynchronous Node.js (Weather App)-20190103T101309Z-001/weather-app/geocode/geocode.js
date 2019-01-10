const request = require('request');

var geocodeAddress = (address, callback) => {

	var encodedEmail = encodeURIComponent(address);

	var request_url = `https://jsonplaceholder.typicode.com/users?email=${encodedEmail}`;

	request({
		url: request_url,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to the server.'); 
		} else if (body.length == 0) {
			callback('Unable to find that Email address.')
		} else if (body) {
			var address = body[0].address;
			callback (undefined, {
				address: `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`,
				latitude: body[0].address.geo.lat,
				longitude: body[0].address.geo.lng
			});
		}
	});
};

module.exports = {
	geocodeAddress
};