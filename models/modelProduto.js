var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var produtoSchema = Schema({
    nomeProd: String,
    preco:  Number,
    menorPreco: Number,
    maiorPreco: Number,
    localProd: String,
    tipoPrd: String,
    dataCriacao: { type: Date, default: Date.now },
    quemRegistrou: String
});

module.exports = mongoose.model('Produto', produtoSchema);

//var Produto = mongoose.model('Produto', produtoSchema);