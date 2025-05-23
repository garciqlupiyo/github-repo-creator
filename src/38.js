const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to your GitHub profile!</h1>
    <p>This is a simple example of a Node.js application using Express.</p>
    <p>You can create, update, and delete your GitHub profile using this code.</p>
    <form action="/create-profile" method="POST">
      <label for="github-email">GitHub Email:</label>
      <input type="text" id="github-email" name="github-email" required><br>
      <button type="submit">Create Profile</button>
    </form>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
