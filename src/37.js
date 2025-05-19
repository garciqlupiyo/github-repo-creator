var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
  var data = {
    user: "admin",
    token: "123456"
  };
  res.json(data);
});

module.exports = router;
