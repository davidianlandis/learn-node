var questions = [
	"What is your name?",
	"What is your quest?",
	"What is your preferred programming language?"
];

var answers = [];

function ask(i) {
	process.stdout.write(`\n\n ${questions[i]}`);
	process.stdout.write("  >  ");
}


// when a data event is raised
process.stdin.on('data', function(data){
	//process.stdout.write('\n' + data.toString().trim() + '\n');
	// save the data
	answers.push(data.toString().trim());

	// ask the next question if there is one
	if(answers.length < questions.length) {
		ask(answers.length);
	} else {
		//process.stdout.write(`You\'re all done:\n\t${questions[0]}: ${answers[0]}\n\t${questions[1]}: ${answers[1]}\n\t${questions[2]}: ${answers[2]}\n\n`);	//'
		process.exit();
	}

});

// listener for process exit
process.on('exit', function(){
	process.stdout.write("\n\nYou\'re all done:\n");
	var l = answers.length;
	for(i = 0; i < l; i++){
		process.stdout.write(`\n\t${questions[i]}: ${answers[i]}`);
	}
	process.stdout.write("\n\n");
});


ask(0);