var express = require('express');
var cors = require('cors');
var path = require('path');
var base = process.cwd(); 
var app = express();

app.use(cors());
app.use(express.static(path.join(base, '/public')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});