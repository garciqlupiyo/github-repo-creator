const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <form action="" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <button type="submit">Submit</button>
    </form>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
