var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', (req, res) =>  {
  console.log(req);
  res.sendStatus(200).end()
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});