const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const dbcon = mysql.createConnection({
    user : 'root',
    local : 'localhost',
    database : 'entregas'
});

 app.get('/entregas/clientes',(req, res) => {
    let string = "select * from clientes";
    dbcon.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
 });

 app.get('/entregas/telefones',(req,res) => {
    let string = "select * from telefones";
    dbcon.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
 });

 app.get('/entregas/entregadores',(req,res) => {
    let string = "select * from entregadores";
    dbcon.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
 });

app.get('/entregas/produtos',(req,res) => {
    let string = "select * from produtos";
    dbcon.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});

app.get('/entregas/pedidos',(req,res) => {
    let string = "select * from pedidos";
    dbcon.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});

app.get('/entregas/itens',(req,res) => {
    let string = "select * from itens";
    dbcon.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});

app.get('/entregas/vw_clientes',(req,res) => {
    let string = "select * from vw_clientes";
    // let stringT = "select * from telefones";
    dbcon.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
            // transformar o res.json(result) em um array, e chamar a posição 6 que é telefones, para armazenar a informação da tabela telefones
        }
    });
});



app.listen(5000,() => {
    console.log("Respondendo na porta 5000");
});