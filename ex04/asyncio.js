const fs = require('fs');

function main()
{
	if (process.argv.length != 3)
		return ;

	fs.readFile(process.argv[2], (err, content) => {
		if (err)
		{
			console.log(err.message);
			return ;
		}
		console.log(content.toString().split('\n').length - 1);
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
