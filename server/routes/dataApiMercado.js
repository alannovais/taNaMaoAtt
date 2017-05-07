var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Mercado = require('../../models/modelMercado');

router.route('/mercados')
    .post(function (req, res) {
        var mercado = new Mercado(req.body);
        mercado.save(function (err) {
            if (err)
                res.send(err);
            res.json(mercado);
            console.log('Mercado Inserido' + mercado);
        });
    })
    .get(function (req, res) {
        Mercado.find(function (err, mercado) {
            if (err)
                res.send(err);
            res.json(mercado);
        });
    });

router.route('/mercados/:merc_id')
    .get(function (req, res) {
        Mercado.findById(req.params.merc_id, function (err, mercado) {
            if (err)
                res.send(err);
            res.json(mercado);

        });
    })
    .put(function (req, res) {
        Mercado.findById(req.params.merc_id, function (err, mercado) {
            if (err)
                res.send(err);

            if (req.body.nomeMercado)
                mercado.nomeMercado = req.body.nomeMercado;

            if (req.body.descricao)
                mercado.descricao = req.body.descricao;
                
            if (req.body.localizacao)
                mercado.localizacao = req.body.localizacao;

            mercado.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ mensagem: 'Mercado Atualizado' });
            });
        });
    })
    .delete(function (req, res) {
        Mercado.remove({
            _id: req.params.merc_id
        }, function (err, mercado) {
            if (err)
                res.send(err);
            res.json({ mensage: 'Mercado Removido' })
        });
    });


module.exports = router;
