const http = require('http');

if (process.argv.length < 3)
	return ;

try
{
	http.get(process.argv[2], res => {
		let html = '';
		res.on('data', line => html += line);
		res.on('end', () => {
			console.log(html.replace(/\n/g, ''));
		});
	}).on('error', (e) => {return ;});
}
catch
{}
