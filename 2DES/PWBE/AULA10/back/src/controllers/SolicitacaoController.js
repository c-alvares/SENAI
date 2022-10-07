//CRUD: Create, Read, Update, Delete
// Controller é onde feita as solicitações, repostas e seus tipos ao DB

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

module.exports = {
    listarSolicitacoes,
    criarSolicitacao,
}