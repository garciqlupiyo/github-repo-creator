const express = require('express');
const app = express();
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log('Example app is running on http://localhost:3000');
});
