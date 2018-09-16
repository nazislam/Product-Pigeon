var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
  console.log('ss');
  res.send('Hello world!');
})

app.listen(port, function() {
  console.log('server is running on port ' + port);
})
