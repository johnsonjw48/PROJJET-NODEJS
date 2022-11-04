var express = require('express');
var router = express.Router();
const {index} = require("../controllers/indexController");

/* GET home page. */
router.get('/', index);

module.exports = router;

//Créer un controller qui va renvoyer une view "users"
//Renvoyer un tableau avec des users
// { name: "John", age: 25, city: "Paris" }
//DAns la vue afficher ces données
//Sous la forme d'une liste
