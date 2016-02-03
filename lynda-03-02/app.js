/* process object - global - accessed with process.argv
 first is node, second is __filename, followed by any additional optional arguments provided */
// console.log(process.argv);


/* function to get arguments - assuming they're prefixed by
    flags, i.e. --user dave*/
function grabByFlag(flag){
	var index = process.argv.indexOf(flag);
	//index++;
	//return process.argv[index];
	return (index === -1) ? null : process.argv[index+1];
}


var greeting = grabByFlag('--greeting');
var user = grabByFlag('--user');

if (!user || !greeting){
	console.log('uh oh.');
} else {
	console.log(`${greeting}, ${user}`);
}