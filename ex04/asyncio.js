const fs = require('fs');

try
{
	fs.readFile(process.argv[2], 'utf8', (err, content) =>
	{
		if (err)
			return ;

		var cnt = 0
		for (var i = 0; i < content.length; i++)
		{
			if (content[i] === '\n')
				cnt++;
		}
		console.log(cnt);
	});
}
catch (e)
{}