// Import necessary packages if any
const express = require('express');
const router = express.Router();
router.get('/', async function(req, res) {
  try {
    const users = await Users.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
