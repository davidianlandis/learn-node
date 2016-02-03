// core module for working with paths
var path = require("path"); 

//not global.hello  even though global.console.log works.  variables are scoped to the file (which is a module)
var hello = "Hello World from Node js";
console.log(hello);	

// all familiar javascript can still be used
var justNode = hello.slice(17);

// template strings (ECMA 6)
console.log(`Oh hey, it\'s me ${justNode}`);	//'

// what directory are we in
console.log(__dirname);

// and what is the full path to this module?
console.log(__filename);

// use our path module basename method
console.log(`My real name is ${path.basename(__filename)}`);