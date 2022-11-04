const mongoose =  require('mongoose');

const pokeSchema = new mongoose.Schema({
    name: String,
    url: String,
    comment: String,
    possession: Boolean
})

const Poke = mongoose.model('Poke', pokeSchema);

module.exports = Poke;
