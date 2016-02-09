var events = require('events');

var emitter = new events.EventEmitter();


/* LISTEN for a custom event */
emitter.on('customEvent', function(message, status) {

	console.log(`${status}: ${message}`);

});


/* FIRE i.e. emit that custom event
		The first argument is the name, the next X arguments 
		are what's passed to the listener callback func */
emitter.emit('customEvent', "Hello World", 200);