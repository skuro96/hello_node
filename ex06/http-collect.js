const http = require('http');
const bl = require('bl');

if (process.argv.length < 3)
    return ;

try
{
    http.get(process.argv[2], function(response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return ;
    
            data = data.toString().replace(/\n/g, '');
            console.log(data.length);
            console.log(data);
        }));
    });
}
catch
{}
