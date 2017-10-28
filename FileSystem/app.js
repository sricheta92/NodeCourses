var url = require("url");
var fs = require("fs");

function openFileandRenderHTML(path,response){

  fs.readFile(path,null,function(error,data){
      if(error){
        response.writeHead(404,{contentType:'text/html'});
        response.write("File not found");
      }else{
        response.write(data);
      }
      response.end();
  });
}

module.exports ={
    openFile : function(request,response){
      response.writeHead(200,{contentType:'text/html'});
      openFileandRenderHTML("../RouteRequest/about.html",response);

  }

};
