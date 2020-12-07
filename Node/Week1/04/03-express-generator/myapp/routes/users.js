var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// localhost:7070/users/list
router.get('/list', function(req, res, next) {
  res.send('users list');
});

module.exports = router;
