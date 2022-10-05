//CRUD: Create, Read, Update, Delete
// Controller é onde feita a comunicação com o banco, suas solicitações e repostas e tipos

const Solicitacao = require('../models/Solicitacao');
const con = require('../models/solicitacaoDAO');

const listarSolicitacoes = (req, res) => {
    con.query(Solicitacao.toReadAll(req.body), (err, result) =>{
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}

const criarSolicitacao = (req, res) => {
    con.query(Solicitacao.toCreate(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}

const listarFuncionarios = (req, res) => {
    con.query(Solicitacao.toReadFunc(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}

module.exports = {
    listarSolicitacoes,
    criarSolicitacao,
    listarFuncionarios
}