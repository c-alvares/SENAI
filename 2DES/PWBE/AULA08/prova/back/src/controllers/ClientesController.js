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
    })
}

module.exports = {
    listarClientes,
    // cadastrarClientes
}