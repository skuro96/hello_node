if (process.argv.length != 3)
	return ;

const http = require('http');
try
{
	http.get(process.argv[2], res => {
		let html = '';
		res.on('error', (e) => {
			console.log(e.message);
			return ;
		})
		res.on('data', (line) => {
			html += line;
		});
		res.on('end', () => {
			console.log(html.replace(/\n/g, ''));
		});
	}).on('error', (e) => {
		console.log(e.message);
		return ;
	});
}
catch (e)
{
	console.log(e.message);
	return ;
}
