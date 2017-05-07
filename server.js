var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

var api = require('./server/routes/api');
var apiProduto = require('./server/routes/dataApiProduto');
var apiMercado = require('./server/routes/dataApiMercado');
var apiUsuario = require('./server/routes/dataApiUsuario');

var mongoose = require('mongoose');


//app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//app.use('/api', api);
app.use('/api', apiProduto);
app.use('/api', apiMercado);
app.use('/api', apiUsuario);


/*app.get('*', (req, res) => { 
    res.sendfile(path.join(__dirname, 'dist/index.html'))
});
*/
var server = http.createServer(app);

mongoose.connect('mongodb://localhost:27017/tanamao');

server.listen(3000,  () => console.log("Sever Running"));