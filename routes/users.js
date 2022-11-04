var express = require('express');
var router = express.Router();
const { index } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', index);

router.get('/about', function(req, res, next) {
  res.send('about users');
});

module.exports = router;
