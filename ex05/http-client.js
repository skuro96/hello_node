const http = require('http');

try
{
	http.get(process.argv[2], res => {
		let html = '';
		res.on('data', line => html += line);
		res.on('end', () => {
			console.log(html.replace(/\n/g, ''));
		});
	});
}
catch
{}
