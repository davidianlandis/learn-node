var http = require('http');
var data = require('./data/inventory');

http.createServer(function(req, res){

	

	if(req.url === "/"){
		res.writeHead(200, {"Content-Type": "text/json"});
		res.end(JSON.stringify(data));
	} else if(req.url === "/instock") {
		res.writeHead(200, {"Content-Type": "text/json"});
		listInStock(res);
	} else if(req.url === "/onorder") {
		res.writeHead(200, {"Content-Type": "text/json"});
		listOnBackOrder(res);
	} else{
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("404 not found");
	}

}).listen(8080);

console.log("Listening on port 8080");



/* list the in stock data */
function listInStock(res){

	/* filter the response object - which is an array */
	/* filter callback is invoked ONCE FOR EVERY ITEM in the array */
	/* this callback is a "predicate" - it should only return TRUE/FALSE */
	var inStock = data.filter(function(item){
		return item.avail === "In stock";
	});

	res.end(JSON.stringify(inStock));

}


/* list the back order items */
function listOnBackOrder(res){
	
	var onOrder = data.filter(function(item){
		return item.avail === "On back order";
	});

	res.end(JSON.stringify(onOrder));

}