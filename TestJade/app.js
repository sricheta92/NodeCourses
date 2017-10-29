var url = require("url");
var fs = require("fs");
var jade = require('jade');
function openFileandRenderHTML(path,response){

  //var html = jade.renderFile('index.jade');
  var fn =  jade.compileFile('index.jade');
  var html = fn({title1:"Sricheta"});
  console.log(html);
  response.write(html);
  response.end();

}

module.exports ={
    openFile : function(request,response){
      response.writeHead(200,{contentType:'text/html'});
      openFileandRenderHTML("../RouteRequest/about.html",response);

  }

};
