const Tratamento = require('../models/tratamentos.model');
// const Composite = require('')
const con = require('../DAO/dentista.dao')

const create = (req, res) => {
    con.query(Tratamento.criar(req.body), (err, result) => {
        if (err == null)
            res.json('Cadastrado com Sucesso').status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const readAll = (req, res) => {
    con.query(Tratamento.ler(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}


const updateItem = (req, res) => {
    con.query(Tratamento.atualizar(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json('Tratamento Atualizado').status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const deleteItem = (req, res) => {
    con.query(Tratamento.excluir(req.params.id), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json('Deletado com Sucesso').status(204).end();
            else
                res.json('Não encontrado').status(404).end();
        else
            res.status(400).end();
    });
}

module.exports = {
    create,
    readAll,
    updateItem,
    deleteItem
}