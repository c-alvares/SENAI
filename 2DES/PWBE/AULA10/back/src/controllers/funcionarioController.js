const Solicitacao = require('../models/Solicitacao');
const con = require('../models/solicitacaoDAO');

const cadastrarFuncionario = (req, res) => {
    con.query(Solicitacao.toCreateFunc(req.body), (err, result) => {
        if (err == null)
        //     res.json(result).end();
        // else
        //     res.json(500).end();
            res.status(201).end();
        else
            if (err.sqlState == 230000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
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

const buscarFuncionario = (req,res) => {
    con.query(Solicitacao.getEmployee(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(500).end();
    })
}



module.exports = {
    listarFuncionarios,
    buscarFuncionario,
    cadastrarFuncionario,
}