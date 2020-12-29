if (process.argv.length != 3)
    return ;

const http = require('http');
const bl = require('bl');

try
{
    http.get(process.argv[2], (response) => {
        response.pipe(bl((err, data) => {
            if (err)
            {
                console.log(err.message);
                return ;
            }
    
            data = data.toString().replace(/\n/g, '');
            console.log(data.length);
            console.log(data);
        })).on('error', (e) => {
            console.log(e.message);
            return ;
        })
    }).on('error', (e) => {
        console.log(e.message);
        return ;
    });
}
catch (e)
{
    console.log(e.message);
    return ;
}
