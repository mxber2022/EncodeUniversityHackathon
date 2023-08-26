var CryptoJS = require("crypto-js");

function encrypt(toEncrypt) 
{
    var encrypted = CryptoJS.AES.encrypt(toEncrypt, 'babu').toString();
    return encrypted;
}

function decrypt(toDecrypt) 
{
    var bytes  = CryptoJS.AES.decrypt(toDecrypt, 'babu');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText);
}
module.exports = {encrypt, decrypt};