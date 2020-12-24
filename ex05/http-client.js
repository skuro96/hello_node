const http = require('http');

if (process.argv.length < 3)
	return ;

const url = process.argv[2];

http.get(url, res => {
	let html = '';
	res.on('data', line => html += line);
	res.on('end', () => {
		console.log(html.replace(/\n/g, ''));
	});
});
