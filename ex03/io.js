const fs = require('fs');

let content;
try
{
	content = fs.readFileSync(process.argv[2]).toString();
}
catch
{
	return ;
}

let cnt = 0;
for (let i = 0; i < content.length; i++)
{
	if (content[i] === '\n')
		cnt++;
}
console.log(cnt);
