
function GetCompName()
{
const os = require('os');

const hostname = os.hostname();
console.log('Computer Name:', hostname);
return hostname;
}

console.log('Name of the Computer:',GetCompName())

function add(a,b)
{
    return a+b
}

module.exports = { GetCompName,add };



