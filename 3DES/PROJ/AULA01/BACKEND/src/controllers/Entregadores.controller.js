const entregador = require('../models/Entregadores.model');
const con = require('../DAO/irango.dao')


const readAll = (req, res) => {
    con.query(entregador.listarEntregadores(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}

const readOne = (req, res) => {
    con.query(entregador.listarEntregador(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end()
        else
            res.status(500).end()
    });
}



module.exports = {
    readAll,
    readOne
}