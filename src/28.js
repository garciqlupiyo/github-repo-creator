const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample data
const data = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  
  // Save user to the database or perform any other actions here
  console.log(newUser);
  
  res.status(201).json({ message: 'User created successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
