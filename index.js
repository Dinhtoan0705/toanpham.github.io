var express = require('express');
const people = require('./people.json');
var app = express();
var server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hội anh em nghiệp quật Thái Nguyên <3',
        people: people.profiles
    });
});
app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
        title: `About ${person.firstname} ${person.lastname}`,
        person,
    });
});