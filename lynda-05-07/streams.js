var fs = require("fs");

// fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
// 
// 	console.log(`File Read ${chatlog.length}`);
// 
// });
// 
// console.log("Reading File...");


var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = ""; // to concatenate with the contents as we receive the chunks


/* once is "on" the first time only */
stream.once("data", function(){
	console.log("\n\n\n");
	console.log("Started Reading File");
	console.log("\n\n\n");
});

/* our read stream received a chunk */
stream.on("data", function(chunk){
	process.stdout.write(`  chunk: ${chunk.length} | `);
	data += chunk;

});

/* done with the chunks */
stream.on("end", function(){
	console.log("\n\n\n");
	console.log(`Finished Reading File ${data.length}`);
	console.log("\n\n\n");
});