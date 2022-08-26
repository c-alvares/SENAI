const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const con = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    database : 'clientes'  
});

// get, post, put, delete
// busca, publica, altera, deletar

app.get('/clientes',(req,res) => {
    // res.json("Aoba! Wha 2 want");
    let string = "select * from vw_clientes";
    con.query(string,(err,result) =>{
        if(err == null) {
            res.json(result);
        }
    });
});

app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});