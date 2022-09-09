const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "locadora"
});

/* module.exports = {
    listarFilmes,
    devolverFilme
} */