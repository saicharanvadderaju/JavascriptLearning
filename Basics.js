console.log('Hello World')

function GetComputerName() {
    try {
        var network = new ActiveXObject('WScript.Network');
        // Show a pop up if it works
        alert(network.computerName);
    }
    catch (e) { }
}

console.log(GetComputerName())

const os = require('os');

const hostname = os.hostname();
console.log('Computer Name:', hostname);
