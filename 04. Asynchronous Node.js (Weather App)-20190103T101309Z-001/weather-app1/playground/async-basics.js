console.log('Starting app');

setTimeout(() => {
	console.log('Inside of callback');
}, 2000);

setTimeout(() => {
	console.log("second setTimeout.");
});

console.log('Finishing up');
