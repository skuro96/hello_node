const fs = require('fs');

try
{
	var content = fs.readFileSync(process.argv[2], 'utf8').toString();

	var cnt = 0;
	for (var i = 0; i < content.length; i++)
	{
		if (content[i] === '\n')
			cnt++;
	}
	console.log(cnt);
}
catch (e)
{}