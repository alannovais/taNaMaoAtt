var express = require('express');
var app = express();

app.delete('/delete', (req, res)=> {
    res.send('Hello World');
});

app.get('/', (req, res)=> {
    res.json({ mensagem: 'Hello World! Postman'});
});

app.get('/', (req, res)=> {
    res.send('Hello World');
});

app.post('/create', (req, res)=> {
    res.send('Hello World');
});

app.put('/update', (req, res)=> {
    res.send('Hello World');
});

module.exports = app;