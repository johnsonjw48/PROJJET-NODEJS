const users = [
    {
        name: "John",
        age: 25,
        city: "Paris"
    },
    {
        name: "Toto",
        age: 12,
        city: "Totoville"
    }
]

const index = (req, res) => {
    res.render('users', users);
}

module.exports = {
    index
}