const fs = require('fs');

function main()
{
	if (process.argv.length != 3)
		return ;

	let content;
	content = fs.readFileSync(process.argv[2]).toString();

	let cnt = 0;
	for (let i = 0; i < content.length; i++)
	{
		if (content[i] === '\n')
			cnt++;
	}
	console.log(cnt);
}

try
{
	main();
}
catch (e)
{
	console.log(e.message);
}
