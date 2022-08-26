const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const dbConnection = mysql.createConnection({
    user : 'root',
    local : 'localhost',
    database : 'onibus'
});

app.get('/onibus/motoristas',(req,res) => {
    let string = "select * from motoristas";
    dbConnection.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
    }
    });
});

app.get('/onibus/telefones',(req,res) => {
    let string = "select * from telefones";
    dbConnection.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});

app.get('/onibus/linhas',(req,res) => {
    let string = "select * from linhas";
    dbConnection.query(string,(err,result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.get('/onibus/horarios',(req,res) => {
    let string = "select * from horarios";
    dbConnection.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});

app.get('/onibus/mot_linhas',(req,res) => {
    let string = "select * from mot_linhas";
    dbConnection.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});

app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});