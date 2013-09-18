var express = require('express');

var server = express();
server.use(express.static(__dirname + "/public"));
server.listen(8000);

