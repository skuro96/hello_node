const http = require('http');
const bl = require('bl');

function main()
{
	if (process.argv.length != 3)
		return ;

	http.get(process.argv[2], (res) => {
		res.pipe(bl((err, data) => {
			if (err)
			{
				console.log(err.message);
				return ;
			}

			let code = data.toString().replace(/\n/g, '');
			console.log(code.length);
			console.log(code);
		})).on('error', (e) => {
			console.log(e.message);
			return ;
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
