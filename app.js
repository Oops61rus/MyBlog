let express = require('express');
let cors = require('cors');
let path = require('path');
const axios = require('axios').default;
let base = process.cwd(); 
let app = express();

// let fs = require('fs');
// fs.writeFileSync('../../listUsers.json', str);

function axiosPost(callback) {
  axios.post('listUsers.json', callback)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

app.use(cors());
app.use(express.static(path.join(base, '/public')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});