var express = require('express');
var app = express();
const { encrypt } = require('./encrypt');
var bodyParser = require('body-parser');

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/encrypt', function (req, res) {

    const temp = "hello"
    const x = encrypt(temp);
    console.log(x);

    res.send('Hello World!');
});



app.listen(3005, function () {
  console.log('Example app listening on port 3000!');
});