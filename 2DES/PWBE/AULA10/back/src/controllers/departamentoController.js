const Solicitacao = require('../models/Solicitacao');
const con = require('../models/solicitacaoDAO');

const listarDepartamento = (req, res) => {
    con.query(Solicitacao.toReadDepartment(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}

const cadastrarDepartamento = (req, res) => {
    con.query(Solicitacao.newDepartment(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}

const deletarDepartamentoID = (req, res) => {
    con.query(Solicitacao.deleteDepartment(req.body), (err, result) => {
        if (err == null)
            res.json(200).end();
        else
            res.json(400).end();
    })
}

module.exports = {
    listarDepartamento,
    cadastrarDepartamento,
    deletarDepartamentoID,
}