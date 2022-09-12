const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "locadora"
});

function listarClientes(req,res) {
    let query = `select * from usuarios`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    });
};

function cadastrarClientes(req, res) {
    let query = `insert into usuarios values (default, '${req.body.nome}', '${req.body.endereco}', '${req.body.telefone}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarClientes,
    cadastrarClientes
};