const net = require('net');

function getDate_formatted()
{
	let now = new Date();

	let year	= now.getFullYear().toString().padStart(4, '0');
	let month	= (now.getMonth() + 1).toString().padStart(2, '0');
	let day		= now.getDate().toString().padStart(2, '0');
	let hour	= now.getHours().toString().padStart(2, '0');
	let min		= now.getMinutes().toString().padStart(2, '0');

	return (year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n');
}

function main()
{
	if (process.argv.length != 3)
		return ;
	
	let port = parseInt(process.argv[2]);
	
	let server = net.createServer((res) => {
		res.on('error', (e) => {
			console.log(e.message);
			return ;
		});
	
		res.write(getDate_formatted());
		res.end();
	}).on('error', (e) => {
		console.log(e.message);
		return ;
	});
	
	server.listen(port).on('error', (e) => {
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
