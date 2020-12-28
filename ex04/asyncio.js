if (process.argv.length != 3)
	return ;

const fs = require('fs');
fs.readFile(process.argv[2], (err, content) => {
	if (err)
	{
		console.log(err.message);
		return ;
	}
	console.log(content.toString().split('\n').length - 1);
});
