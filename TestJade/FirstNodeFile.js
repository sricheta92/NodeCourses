var fs = require("fs");


fs.readFile("../RouteRequest/about.html",function(error,data){
//console.log(__dirname);
console.log(error);
console.log(data);
});
