var EventEmitter = require('events').EventEmitter;
var util = require('util');

/* In havascript, objects are functions - constructor functions */
var Person = function (name) {
	this.name = name;
};

/* Add the EventEmitter to our Person prototype - using the util->inherits method 
		when a new instance of Person is created, it will have the 
		EventEmitter functionality
*/
util.inherits(Person, EventEmitter);

/* what to return when we "require" this module from somewhere else */
module.exports = Person;