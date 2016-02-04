var readline = require('readline');

/* create an instance of rl */
var rl = readline.createInterface(process.stdin, process.stdout);


var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person?", function(answer) {

	/* set the name as this first user input */
	realPerson.name = answer;

	/* setup a prompt that can be re-used */
	rl.setPrompt(`What would ${realPerson.name} say? `);
	/* execute that prompt */
	rl.prompt();
	/* listen for a new line from the user input and do something */
	rl.on('line', function(saying) {

		/*if(saying != "exit") {
			realPerson.sayings.push(saying);
		} else {
			process.exit();
		}
		rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		rl.prompt();   <--my guess */

		if(saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			realPerson.sayings.push(saying.trim());
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
			rl.prompt();
		}


	});

});



/*process.on('exit', function(){	
	process.stdout.write(`\n\n${realPerson.name} says:\n`);
	realPerson.sayings.forEach(function(saying){
		process.stdout.write(`    ${saying}\n`);
	});
});   <--my guess */

rl.on('close', function(){

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});