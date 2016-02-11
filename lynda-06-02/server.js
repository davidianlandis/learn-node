/*	1: Ran these commands to enable mod_proxy for apache:
		sudo a2enmod proxy
		sudo a2enmod proxy_http
	2. ADDED THE FOLLOWING TO THE BOTTOM OF apache2.conf:
		ProxyPass /whateverYouWant http://localhost:8080
		ProxyPassReverse /whateverYouWant http://localhost:8080
		(made is /node for simplicity and not to be confused with an actual filesystem dir)
	3. Started the node.js server and then navigated to:
		http://localhost:8080/learn-node
*/
var http = require('http');

var server = http.createServer(function(req, res){

	// text/plain, text/html
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
		`);

	console.log(`${res.statusCode}: ${res.statusMessage}`);

});

server.listen(8080);

console.log("Server Started on port 8080.");
