const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());


const databaseCon = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    database : 'academia'
});

app.get('/academia/alunos',(req,res) => {
    // res.json("Siuuuuuuuuu");
    let string = "select * from alunos";
    databaseCon.query(string,(err,result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.get('/academia/telefones',(req,res) => {
    let string = "select * from telefones";
    databaseCon.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }     
    });
});

app.get('/academia/aparelhos',(req,res) => {
    let string = "select * from aparelhos";
    databaseCon.query(string,(err,result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.get('/academia/exercicios',(req,res) => {
    let string = "select * from exercicios";
    databaseCon.query(string,(err,result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.get('/academia/fichas',(req,res) => {
    let string = "select * from fichas";
    databaseCon.query(string,(err,result) => {
        if (err == null) {
            res.json(result);
        } else res.json(err);
    });
});

app.get('/academia/vw_dalunos/', (req,res) => {
    let string = "select * from vw_dalunos";
    databaseCon.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});

app.listen(5000, () => {
    console.log("Respondendo na porta 5000")
}); 
