const index = (req, res) => {
    res.render('index', { title: 'Express', message: 'Hello world!'});
}

module.exports = {
    index
}