const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to your GitHub Profile Repo</h1>');
});

app.listen(3000);
