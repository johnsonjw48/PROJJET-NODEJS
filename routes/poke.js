var express = require('express');
var router = express.Router();
const pokeController = require('../controllers/pokeController');
const userController = require("../controllers/usersController");

router.get('/', pokeController.index);
router.get('/:name', pokeController.detailsPoke);
router.post('/', pokeController.create);
router.put('/', pokeController.updatePoke);
router.delete('/', pokeController.deletePoke);

module.exports = router;
