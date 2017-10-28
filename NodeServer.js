var http = require("http");

http.createServer(function(req,res){
  var url = req.url;
  res.writeHead(200);
  res.write("<h1>Hello Node Server</h1>");
  url = url.slice(1,req.url.length)
  res.write("<h1> URL entered is "+url+"</h1>");
  res.end();

}).listen(9090);
