const http = require('http');
const bl = require('bl');

function printData(url)
{
	try
	{
		http.get(url, function(response) {
			response.pipe(bl(function (err, data) {
				if (err)
					return ;
	
				data = data.toString().replace(/\n/g, '');
				console.log(data);
			}));
		});
	}
	catch
	{}
}

if (process.argv.length < 5)
	return ;

try
{
	for (let i = 0; i < 3; i++)
	{
		printData(process.argv[i + 2]);
	}
}
catch
{}
