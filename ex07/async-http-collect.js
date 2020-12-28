let http = require("http");

function getCode(url) {
	return new Promise(function (resolve, reject) {
		http.get(url, (res) => {
			let data = "";
			res.on('data', (d) => {
				data += d;
			});
			res.on('end', () => {
				resolve(data.replace(/\n/g, ''));
			});
		}).on('error', (e) => {
			reject(e);
		});
	});
}

async function main()
{
	if (process.argv.length != 5)
		return ;

	try
	{
		for (let i = 0; i < 3; i++)
		{
			ret = await getCode(process.argv[i + 2]);
			console.log(ret);
		}
	}
	catch (e)
	{
		console.log(e.message);
		return ;
	}
}

main();
