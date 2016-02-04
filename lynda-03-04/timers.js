var waitTime = 3000;
var currentTime = 0;
var waitInterval = 100;
var percentWaited = 0;


/* function to replace the last line in the terminal with new content
	so that it doesn't just keep appending these appending these messages to the output
*/
function writeWaitingPercent(p){
	/* clear last line in terminal */
	process.stdout.clearLine();
	/* move to the beginning of the line */
	process.stdout.cursorTo(0);
	/* write it */
	process.stdout.write(`waiting ... ${p}%`);
}


var interval = setInterval(function(){
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime / waitTime) * 100);
	writeWaitingPercent(percentWaited);
	// console.log(`waiting ${currentTime/1000} seconds...`);
}, waitInterval);


setTimeout(function(){
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n\n done \n\n");

}, waitTime);


process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);