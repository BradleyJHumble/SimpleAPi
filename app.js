var http = require('http');
var express = require('express');
var app = express();


app.get("/", function (require, response) {
	response.send("Hello World");
})

app.get('/api/name/:name', function(require, response){
	response.send("Hello " + require.params.name);
});

app.get('/api/klick-signup/:name/:key', function(require, response){
	const SuperKey = require.params.key;
	const SuperHero = require.params.name;

	if (SuperKey > 3) {
		response.send("key accepted " + SuperHero );
	} else {
		response.send("sorry" + SuperHero + "  key is not accepted");
	};
});

http.createServer(app).listen(3000, function() {
 	console.log("Server is running")
});
