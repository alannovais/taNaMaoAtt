var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = require('../../models/modelUsuario');

router.route('/usuarios')
    .post(function (req, res) {
        var usuario = new Usuario(req.body);

        usuario.save(function (err, usuario) {
            if (err)
                res.send(err);
            res.json(usuario);
        });
    })
    .get(function (req, res) {
        Usuario.find(function (err, usuario) {
            if (err)
                res.send(err);
            res.json(usuario);
        })
    });
router.route('/usuarios/:user_id')
    .get(function (req, res) {
        Usuario.findById(req.params.user_id, function (err, usuario) {
            if (err)
                res.send(err);
            res.json(usuario);
        });
    })
    .put(function (req, res) {
        Usuario.findById(req.params.user_id, function (err, usuario) {
            if (err)
                res.send(err);
            console.log(usuario);
            
            if(req.body.password)
                usuario.password = req.body.password;
            
            if(req.body.nomeComp)
                usuario.nomeComp = req.body.nomeComp;
    
            if(req.body.email)
                usuario.email = req.body.email;
            
            if(req.body.dataNasc)    
                usuario.dataNasc = req.body.dataNasc;
            
            if(req.body.sexo)
                usuario.sexo = req.body.sexo;

            if(req.body.profissao)
                usuario.profissao = req.body.profissao;

            if(req.body.status)
                usuario.status = req.body.status;

            usuario.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ mesagem: 'Usuario Atualizado' });
            });
        });
    })
    .delete(function (req, res) {
        Usuario.remove({
            _id: req.params.user_id
        }, function (err, usuario) {
            if (err)
                res.send(err);
            res.json({ mensagem: 'Usuario Removido' });
        });
    });

module.exports = router;
