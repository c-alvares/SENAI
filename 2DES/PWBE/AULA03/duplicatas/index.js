const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const dataConnection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'duplicatas'
});

app.get('/duplicatas/clientes', (req,res) => {
    // res.json("Siuuuuuuuuuuuuuu");
    // let string = "select * from vw_duplicatas";
    let string = "select * from clientes";
    dataConnection.query(string,(err,result) => {
        if(err == null){
            res.json(result);
        }
    })
});

app.get('/duplicatas/telefones', (req,res) => {
    let string = "select * from telefones";
    dataConnection.query(string,(err,result) => {
        if(err == null){
            res.json(result);
        }
    })
});

app.get('/duplicatas/duplicatas', (req,res) => {
    let string = "select * from duplicatas";
    dataConnection.query(string,(err,result) => {
        if(err == null){
            res.json(result);
        }
    })
});

app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});