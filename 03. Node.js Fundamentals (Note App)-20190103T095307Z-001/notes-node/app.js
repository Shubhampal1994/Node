console.log('Starting app.js');

// const os = require('os');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs: ', argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note Added Successfully\n----');
		notes.logNote(note);
	} else {
		console.log('Unable to add note\nNote\'s Title already exists');
	};

} else if (command === 'list') {
	notes.getAll();

} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	var message = '';
	if (note) {
		console.log('Note found\n----');
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}

} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note removed successfully' : 'Note not found';
	console.log(message);

} else {
	console.log('Command not recognized');
}

// console.log(process.argv);

// var filteredArray = _.uniq(['Mike', 1, 'Shubh', 1, 2, 3, 2, 4]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('true'));


// console.log('Square: ', notes.square(3));

// var res = notes.add(12, 3);
// console.log(res);

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
// console.log(user);

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
