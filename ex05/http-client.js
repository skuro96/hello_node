const http = require('http');

function main()
{
	if (process.argv.length != 3)
		return ;

	http.get(process.argv[2], res => {
		let code = '';
		res.on('error', (e) => {
			console.log(e.message);
			return ;
		})
		res.on('data', (line) => {
			code += line;
		});
		res.on('end', () => {
			console.log(code.replace(/\n/g, ''));
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
