const Express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "lojinha"
});

const app = Express();
app.use(Express.json()); //permitir que envia e receba estrutura json por padrão
app.use(cors());  //permitir a comunicação cruzada, envio e recebimento

app.get("/produtos", (req, res) => {
    let query = "SELECT * FROM produtos";

    conDB.query(query,(err, result) => {
        if(err == null) {
            res.json(result).status(200).end() //Traz o json, o status e encerra a conexão
        }else {
            res.json(err).status(402).end();//
        }
    });
});
// busca pelo produto mandando o código pela url
// http://localhost:3000/produtos/MO5214
// capturamos essa estrutra no req.params
// Os : indica que será buscado no req.params
// req.params.cod
app.get('/produtos/:cod', (req,res) => {
    let query = `SELECT * FROM produtos WHERE cod = '${req.params.cod}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })    
})


app.post("/produtos", (req, res) => {
    // req.query => http://localhost:3000/produtos/cod=abc1234&nome=teste
    // req.param => /produtos/:cod/:nome => https://localhost:3000/produtos/abc1234/teste
    // console.log(req.params);
    let query = `INSERT INTO produtos VALUES (DEFAULT, '${req.body.cod}', '${req.body.nome}', ${req.body.qntd}, ${req.body.preco})`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
});


app.delete("/produto", (req, res) => {
    let query = `DELETE FROM produtos WHERE cod = '${req.body.cod}'`;

    conDB.query(query,(err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
});

app.put("/produto", (req, res) => {
    let query = `UPDATE produtos SET cod = '${req.body.cod}', nome = '${req.body.nome}', qntd = ${req.body.qntd}, preco = ${req.body.preco} WHERE cod = '${req.body.cod}'`;

    conDB.query(query,(err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });


});

app.listen(3000,() => {
    console.log("App ON");
});
