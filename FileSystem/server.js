var http = require("http");
var app = require("./app");

http.createServer(app.openFile).listen(9090);
