console.log("Starting notes.js");

var addNote = (title, body) => {
	console.log('Adding note: ', title, body);
};

var getAll = () => {
	console.log('Getting all Notes.');
};

var getNote = (title) => {
	console.log('Geting Note: ', title);
};

var removeNote = (title) => {
	console.log('Removing Note: ', title)
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
