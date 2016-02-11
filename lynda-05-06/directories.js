var fs = require("fs");


// fs.renameSync("./assets/logs", "./logs");
// 
// console.log("Directory moved");


// fs.rmdir("./assets", function(err){
// 
// 	if(err){
// 		throw err;
// 	}
// 
// 	console.log("assets directory has been removed");
// });


/* can't remove a directory with files */
fs.readdirSync("./logs").forEach(function(fileName){
	fs.unlinkSync("./logs/" + fileName);
});

fs.rmdir("./logs", function(err){

	if(err){
		throw err;
	}

	console.log("logs directory has been removed");

});
