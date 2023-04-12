const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', { title: 'Home' });    
});

app.get('/', function(req, res) {
    res.render('index', { title: 'Home' });    
});

app.listen(3000, function() {
    console.log('Server listening on port 3000')
});
