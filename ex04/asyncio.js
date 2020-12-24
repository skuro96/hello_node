const fs = require('fs');

if (process.argv.length < 3)
	return ;

fs.readFile(process.argv[2], (err, content) => {
	if (err)
		return ;
	
	let lines = content.toString().split('\n');
	console.log(lines.length - 1);
});
