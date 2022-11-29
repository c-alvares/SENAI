const Profissional = require('../models/profissionais.model');
const con = require('../DAO/dentista.dao');

const verificarProfissionais = (req, res) => {
    con.query(Profissional.read(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}

const tratamentos = (req, res) => {
    con.query(Profissional.dadosTratamento(req.params.id), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    verificarProfissionais,
    tratamentos
}