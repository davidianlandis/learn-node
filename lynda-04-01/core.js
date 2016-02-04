var path = require('path');
var util = require('util');
var v8 = require('v8');

/* basename to get just the file(base)name of a file */
util.log( path.basename(__filename) );

/* create path strings using join method */
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);

util.log(v8.getHeapStatistics());