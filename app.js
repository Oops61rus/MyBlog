var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (req, res, next) {
  res.sendFile(__dirname, '/views/login.html');
  console.log(__dirname);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});