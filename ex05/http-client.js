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

		res.on('data', (line) => {
			console.log(line.toString());
		});
		res.on('end', () => {});
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
