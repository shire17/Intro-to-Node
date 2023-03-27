var http = require('http');
var url = require('url');
var fs = require('fs');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	if (filename === './') {
		filename = './index';
	}
	filename = filename + '.html';
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Tyope': 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
		res.end();
	});
}).listen(PORT);

console.log('Server listening on port 8080');