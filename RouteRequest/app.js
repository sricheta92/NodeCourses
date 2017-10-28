var url = require("url");
var fs = require("fs");

function renderHTML(path,response){

  fs.readFile(path,null,function(error,data){
      if(error){
        response.writeHead(404,{contentType:'text/html'});
        response.write("File not found");
      }else{
        console.log("hello");
              console.log(data);
      //  response.writeHead(200);
        response.write(data);
      }
      response.end();
  });
}

module.exports ={
    handleRequest : function(request,response){
            response.writeHead(200,{contentType:'text/html'});
      var path = url.parse(request.url).pathname;
      console.log(path);
      switch(path){
        case "/about" : renderHTML("./about.html",response);
                        break;
        case "/nacktschnecke" : renderHTML("./nacktschnecke.html",response);
                                break;
        default:
          response.write("<h1>Route not defined<h1>");
      }

  }

};
