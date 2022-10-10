const Solicitacao = require('../models/Solicitacao');
const con = require('../models/solicitacaoDAO');
// .body é utilizado quando é importado valores advindos do body(ex: input)
const listarProduto = (req, res) => {
    con.query(Solicitacao.toReadProduct(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}
// .params é utilizado quando é importado dados da url/uri
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