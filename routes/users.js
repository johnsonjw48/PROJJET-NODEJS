var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', userController.index);

router.post('/', userController.create);

router.put('/', userController.update);

router.delete('/', userController.supprimer);

router.get('/about', function(req, res, next) {
  res.send('about users');
});

module.exports = router;
