const User = require('../models/usersModel')

const create = (req, res) => {
    const {name, age, city} = req.body;

    User.create({name, age, city})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

const index = (req, res) => {
    User.find()
        .then(users => res.render('users', {users: users}))
        .catch(err => res.json(err));
}

const update = (req, res) => {
    User.update({name: req.body.name}, {
        name: req.body.newName,
        age: req.body.newAge,
        city: req.body.newCity
    })
        .then(() => res.json('user modifier'))
        .catch(err => res.json(err));
}

const supprimer = (req, res) => {
    User.deleteOne({name: req.body.name})
        .then(() => res.json('user supprimer'))
        .catch(err => res.json(err));
}

module.exports = {
    index,
    create,
    update,
    supprimer
}
