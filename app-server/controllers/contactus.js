var lineReader = require('line-reader');

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

module.exports.contactus = function(req,res)
{
    sendPage('public/contactus.html',res);
};
