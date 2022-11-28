const link = require('../models/consultas.model');
const con = require('../DAO/dentista.dao');

const verificarConsultas = (req, res) => {
    con.query(link.read(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}

module.exports = {
    verificarConsultas
}