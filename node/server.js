// include the http module you need
var http = require("http");
// access the createServer method in the http object
http.createServer(function(request, response) {
// tell the server what kind of file is coming at it
    response.writeHead(200, {"Content-Type": "text/plain"});
// make the server output a message
    response.write("Welcome to the future of JavaScript.");
// End the server interaction
    response.end();
}).listen(3000); // listening on port 3000