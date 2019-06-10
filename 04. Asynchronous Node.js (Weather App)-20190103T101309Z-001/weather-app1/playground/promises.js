var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('Input must be numbers');
			}
		}, 2000);
	});
};

asyncAdd(-3, 4).then((result) => {
	console.log('Result: ', result);
	return asyncAdd(result, 11);
}).then((res) => {
	console.log('Result should be 12: ', res);
}).catch((errorMessage) => {
	console.log(errorMessage);
});





// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve('Hey. It worked!');
// 		reject('Unable to fulfill promise');
// 	}, 2500);
// });

// somePromise.then((message) => {
// 	console.log('Success: ', message);
// }, (errorMessage) => {
// 	console.log('Error: ', errorMessage);
// });
