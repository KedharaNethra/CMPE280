var lineReader = require('line-reader');
var fs = require('fs');

function sendPage(fileName, response)
{
    var html = '';

    lineReader.eachLine (fileName,
        function(line,last) 
    {
        html += line + '\n';  

        if (last)
        {
            response.send(html);
            return false;
        }
        else
        {
            return true;
        }
    });
}

module.exports.nethra = function(req,res)
{
    res.send(fs.readFileSync('people/Nethra.html', {encoding: 'utf-8'}));
    //sendPage('../people/Nethra.html',result);
};

module.exports.haroon = function(request,response)
{
    sendPage('people/Haroon.html',response);
};

module.exports.ishaan = function(request,response)
{
    sendPage('people/Ishaan.html',response);
};

module.exports.vidhya = function(request,response)
{
    sendPage('people/Vidhya.html',response);
};
