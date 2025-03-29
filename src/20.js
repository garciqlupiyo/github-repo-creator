var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/data', function(req, res) {
  var data = req.body;
  
  // Add your data processing logic here
  console.log("Received data:", data);
  
  res.send({ message: "Data received successfully", response: { data } });
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
