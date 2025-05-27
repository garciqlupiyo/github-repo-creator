const express = require('express');
const app = express();
app.use(express.json());

let users = [];

function addUser(user) {
  if (users.length >= 100) throw new Error('Too many users.');
  users.push(user);
}

function getUsers() {
  return users;
}

module.exports = { getUsers };
