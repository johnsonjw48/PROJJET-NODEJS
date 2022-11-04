const Poke = require("../models/pokeModel");
const User = require('../models/usersModel')
const request =  fetch('https://pokeapi.co/api/v2/pokemon')

const index = (req, res) => {
   request
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(err => res.json(err));
}



const detailsPoke =  (req, res) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + req.params.name;
    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
}


const create = (req, res) => {
    const {name, url, comment, possession} = req.body;

    Poke.create({name, url, comment, possession})
        .then(poke => res.json(poke))
        .catch(err => res.json(err))
}

const updatePoke = (req, res) => {
    Poke.update({name: req.body.name}, {
        comment: req.body.newComment,
        possession: req.body.newPossession
    })
        .then(() => res.json('poke modifier'))
        .catch(err => res.json(err));
}

const deletePoke = (req, res) => {
    Poke.deleteOne({name: req.body.name})
        .then(() => res.json('poke supprimer'))
        .catch(err => res.json(err))
}

module.exports = {
    index,
    detailsPoke,
    create,
    updatePoke,
    deletePoke
}
