const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({ message: 'Please provide a username and password.' });
  }

  // Example: Check if the user already exists
  if (users.find(user => user.username === username)) {
    return res.status(200).json({
      message: 'User already exists',
      data: users.find(user => user.username === username)
    });
  } else {
    users.push({ username, password });

    // Example: Generate a unique token for the user
    const token = generateToken(username);

    return res.status(201).json({
      message: 'User created successfully',
      data: { token },
      data: users
    });
  }
});

app.post('/register', (req, res) => {
  // Implement registration logic here

  res.status(500).json({ message: 'An error occurred while registering the user.' });
});

const users = [
  { username: 'john_doe' },
  { username: 'jane_doe' }
];

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
