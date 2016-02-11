var https = require('https');
var fs = require('fs');

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};


/* response object is sent back using stream interface */
var req = https.request(options, function(res){

	/* setup empty variable to concatenate */
	var responseBody = "";

	console.log("Response from server started.");
	console.log(`Server Status: ${res.statusCode}`);	/* http response code i.e. 200 */
	console.log("Response Headers: %j", res.headers);	/* response headers are in JSON */

	/* default encoding is Binary */
	res.setEncoding("UTF-8");

	/* first data event */
	res.once("data", function(chunk){
		console.log(chunk);
	});

	/* every data event */
	res.on("data", function(chunk){
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	/* when has it ended? */
	res.on("end", function(){
		fs.writeFile("george-washington.html", responseBody, function(err){
			if(err){
				throw err;
			}
			console.log("File Downloaded");
		});
	});

});


/* Was there an error with our http request function? */
req.on("error", function(err){
	console.log(`problem with request: ${err.message}`);
});

/* end the request */
req.end();