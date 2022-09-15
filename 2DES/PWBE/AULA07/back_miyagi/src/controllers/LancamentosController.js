const mysql = require('mysql');

const connectionDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "livro_caixa"
});

function listarLancamentos(req, res) {
    let query = "SELECT * FROM lancamentos";

    connectionDB.query(query, (err, result) =>{
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
}


function cadastrarLancamento(req,res) {
    let query = `INSERT INTO lancamentos VALUES(DEFAULT, curdate(), '${req.body.descricao}', ${req.body.valor}, '${req.body.tipo}')`;

    connectionDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();     
        }
    });
}

function filtrarData(req, res) {
    let query = `SELECT * FROM lancamentos WHERE = '${req.params.day}'`;

    connectionDB.query(query, (err, result) =>{
        if(err == null){
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    });
}

module.exports = {
    listarLancamentos,
    cadastrarLancamento,
    filtrarData
};