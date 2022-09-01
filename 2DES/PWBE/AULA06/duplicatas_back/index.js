const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const cli = require("./scr/clientes");

const app = express();
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'duplicatas'
});

app.get('/duplicatas/clientes',(req,res)=>{
    let string = "select * from vw_clientes order by cod_cli"; // order by é utilizado para organizar, colocar em ordem alfabética, numérica crescente;
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(cli.clientes(result)); //foi chamado o objeto. a função criada (result é o parâmetro lista da função)
        }
    });
});

app.get('/duplicatas/duplicatas',(req,res)=>{
    let string = "select * from duplicatas";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.get('/duplicatas/duplicatasaberto',(req,res)=>{
    let string = "select * from vw_duplicatas_aberto";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.get('/duplicatas/duplicataspagas',(req,res)=>{
    let string = "select * from vw_duplicatas_pagas";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});