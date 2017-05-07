var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mercadoSchema = Schema({
    nomeMercado: String,
    descricao: String,
    localizacao: String
    //quemInseriu: {type: String}
});

module.exports = mongoose.model('mercado', mercadoSchema); 