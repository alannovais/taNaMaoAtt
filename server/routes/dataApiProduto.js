var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Produto = require('../../models/modelProduto');

router.route('/produtos')
    .post(function (req, res) {
        var produto = new Produto(req.body);
        produto.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.json(produto);
            } console.log('Produto inserido ' + produto);
        })
    })
    .get(function (req, res) {
        Produto.find(function (err, produto) {
            if (err)
                res.send(err);
            res.json(produto);
        });
    });
router.route('/produtos/:prod_id')
    .get(function (req, res) {
        Produto.findById(req.params.prod_id, function (err, produto) {
            if (err)
                res.send(err);
            res.json(produto);
        });
    })
    .put(function (req, res) {
        Produto.findById(req.params.prod_id, function (err, produto) {
            if (err)
                res.send(err);

            if (req.body.nomeProd)
                produto.nomeProd = req.body.nomeProd;

            if (req.body.preco)
                produto.preco = req.body.preco;

            if (req.body.localProd)
                produto.localProd = req.body.localProd;
                
            if (req.body.tipoPrd)
                produto.tipoPrd = req.body.tipoPrd;

            console.log(produto);
            produto.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ message: "produto att!" });
            });
        });
    })
    .delete(function (req, res) {
        Produto.remove({
            _id: req.params.prod_id
        }, function (err, produto) {
            if (err)
                res.send(err);
            res.json({ message: "produto removido!" });
        });
    });


module.exports = router;