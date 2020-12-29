const http = require('http');

function main()
{
	if (process.argv.length != 3)
		return ;

	http.get(process.argv[2], res => {
		res.on('error', (e) => {
			console.log(e.message);
			return ;
		});

		let data = '';
		res.on('data', (line) => {
			data += line;
		});
		res.on('end', () => {
			data = data.toString();
			console.log(data.length);
			console.log(data);
		});
	}).on('error', (e) => {
		console.log(e.message);
		return ;
	});	
}

try
{
	main();
}
catch (e)
{
	console.log(e.message);
}
