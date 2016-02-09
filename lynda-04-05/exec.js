var exec = require("child_process").exec;

// exec("open http://www.linkedin.com");
//exec("open -a Terminal ."); // or exec("cmd .");


//exec("ls", function(err, stdout){
exec("git version", function(err, stdout){

	if(err){
		throw err;
	}

	console.log("Git Version:");
	console.log(stdout);
});
