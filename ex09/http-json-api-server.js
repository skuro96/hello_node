const http = require('http');
const querystring = require('querystring');

function main()
{
	if (process.argv.length != 3)
		return ;
	
	let port = parseInt(process.argv[2]);
	if (isNaN(port) || port < 0 || 65535 < port)
		return ;
	
	let server = http.createServer(function (req, res) {
		let path = req.url.split('?')[0];
		let queryStr = req.url.split('?')[1];
		let query = querystring.parse(queryStr);

		if (path && req.method == 'GET' && query['iso'] && (path == '/api/unixtime' || path == '/api/parsetime'))
		{
			let date = new Date(query['iso']);
			if (date == 'Invalid Date')
			{
				res.writeHead(400);
				res.write('Invalid Date\n');
				res.end()
				return ;
			}

			let message;
			if (path == '/api/unixtime')
			{
				message = JSON.stringify({
					unixtime: Date.parse(query['iso'])
				});
			}
			else
			{
				message = JSON.stringify({
					hour: date.getUTCHours(),
					minute: date.getUTCMinutes(),
					second: date.getUTCSeconds()
				});
			}
			res.writeHead(200);
			res.write(message + '\n');
			res.end();
			return ;
		}
		else
		{
			res.writeHead(404);
			res.write('404 Not Found\n');
			res.end();
			return ;
		}
	});
	server.listen(port).on('error', (e) => {
		console.log(e.message);
		return ;
	});
}

try
{
	main()
}
catch (e)
{
	console.log(e.message);
}
