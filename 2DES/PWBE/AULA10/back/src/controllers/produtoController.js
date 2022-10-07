const Solicitacao = require('../models/Solicitacao');
const con = require('../models/solicitacaoDAO');

const listarProduto = (req, res) => {
    con.query(Solicitacao.toReadProduct(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}
const buscarProduto = (req, res) => {
    con.query(Solicitacao.toGetProductByName(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}

const cadastrarProduto = (req, res) => {
    con.query(Solicitacao.newProduct(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}

module.exports = {
    listarProduto,
    buscarProduto,
    cadastrarProduto
}