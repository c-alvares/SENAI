const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    database : 'pedidos'
});

app.use(express.json());

app.get('/projeto02',(req, res)=>{
    //console.log(req.query);
    let priNome = req.query.priNome;
    let sobrenome = req.query.sobrenome;
    let endereco = req.query.endereco;
    let telefones = req.query.telefones;
    let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`;
    let string2 = `insert into telefones value(,'${telefones}')`;
    con.query(string, string2(err, result)=>{
        if(err == null){
            res.json("Daddos recebidos com sucesso e enviados para o nosso Banco de Dados");
        } else {
            res.json("Daddos recebidos com sucesso, porém não conseguimos enviar para o Banco de Dados");
        }
    });
});


app.listen(3000,()=>{
    console.log("Respondendo na porta 3000");
});