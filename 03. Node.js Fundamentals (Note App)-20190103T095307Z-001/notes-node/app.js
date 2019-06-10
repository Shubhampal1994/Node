// const os = require('os');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
			describe: 'Title of note',
			demand: true,
			alias: 't'
};
const bodyOptions = {
			describe: 'Content of note',
			demand: true,
			alias: 'b'
};
const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;
var command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note Added Successfully\n----');
		notes.logNote(note);
	} else {
		console.log('Unable to add note\nNote\'s Title already exists');
	};

} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found\n');
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
