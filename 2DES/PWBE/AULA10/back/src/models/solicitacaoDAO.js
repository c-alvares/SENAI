// Estabelecimento da comunicação com o DB.
// Caso ocorra a necessidade de se comunicar com vários bancos,
// criar um DAO (Data Acess Object) para cada DB.
const mysql = require("mysql");
// user é o usuário para acesso aos dados.
// Nesse caso, como trabalhamos com programações locais, não utilizamos senha,
// mas, para servidores online é obrigatório para a segurança.
// host define onde um DB está localizado ou de qual servidor o cógio deve ser executado.
// database é o db que será acessado.
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'solicitacoes'
});

module.exports = con;