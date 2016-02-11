var fs = require("fs");

// var contents = fs.readFileSync("./lib/sayings.md");
// console.log(contents);

// var contents = fs.readFileSync("./lib/sayings.md", "UTF-8");
// console.log(contents);

// fs.readFile("./lib/sayings.md", "UTF-8", function(err, files){
//	
//	if(err){
//		console.log(err);
//	}
//
//	console.log(files);
//
// });

var path = require("path");

var dir = "./lib";

fs.readdir(dir, function(err, files){

	files.forEach(function(fileName){

		var file = path.join(__dirname, "lib", fileName);
		var stats = fs.statSync(file);

		if(stats.isFile()){

			fs.readFile(file, "UTF-8", function(err, contents){
				console.log(contents);
			});
			
		}

	});

});