const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];
  if(userAgent.indexOf('curl') > -1) {
    res.send('Hello from curl!');
  } else if(userAgent.indexOf('python') > -1) {
    res.send('Hello from Python!');
  } else if(userAgent.indexOf('nodejs') > -1) {
    res.send('Hello from NodeJS!');
  } else {
    res.send('Hello from a browser!');
  }
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
