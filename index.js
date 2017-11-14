var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {

	response.setHeader('Content-Type', 'text/html; charset = utf-8');

	if (request.method === 'GET' && request.url === '/') { 

		fs.readFile('./index.html', 'utf-8', (err, data) => { //  Stwórz plik index.html i odeślij jego treść do klienta, jeśli wystąpi zapytanie na url

			if (err) throw err;	

			response.statusCode = 200;
			response.write(data);
			response.end();
		}); 	

	} else {

		response.statusCode = 404;
		response.write('./error.jpg');
		response.end('Resource not found. Sorry.');
	}


});

server.listen(8080);