var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = Schema({
  login: String,
  password: String,
  nomeComp: String,
  email: String,
  dataNasc: Date,
  sexo: String,
  idade: Number,
  profissao: String,
  status: {type: Boolean, default: true},
  dataCriacao: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Usuario', usuarioSchema);