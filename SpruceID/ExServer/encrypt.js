var CryptoJS = require("crypto-js");

function encrypt(toEncrypt) 
{
    var data = [{id: 1}, {id: 2}]
    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
    console.log("encrypted", encrypted);

    return encrypted;
}

function decrypt(toDecrypt) 
{
    var bytes  = CryptoJS.AES.decrypt(toDecrypt, 'secret key 123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log("decryptedData", decryptedData);
}

module.exports = {encrypt, decrypt};