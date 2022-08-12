//Importa as pricipais dependências
const express = require('express'); //Habilita os verbos HTTP
const mysql = require('mysql'); //Habilita a conexão com o Banco de dados
const bodyParser = require('body-parser'); //Habilita conversão de Form POST para JSON

//Inicia a aplicação para responder as requisições
const app = express();

//Cria a conexão com o Banco de dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
});

//Configurações básicas da aplicação
app.use(express.json());
//Converte o corpo de um formulário recebido via post para json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Ouve o que chega pelo verbo POST
app.post('/pedidos', (req, res) => {
    let id = -1;
    let priNome = req.body.priNome;
    let sobrenome = req.body.sobrenome;
    let endereco = req.body.endereco;
    let telefones = req.body.telefones.split("\r\n");
    let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`;
    con.query(string, (err, result) => {
        if (err == null) {
            res.json("Dados recebidos com sucesso e enviados para o nosso Banco de Dados");
            id = result.insertId;
        } else {
            res.json("Dados recebidos com sucesso, porém não conseguimos enviar para o banco de dados");
        }
    });

    telefones.forEach((e) => {
        string = `insert into telefones values(${id}, '${e}')`;
        con.query(string, (err, result) => {
            if(err == null){
               res.json("Telefones enviados para o banco de dados") 
            }else{
                res.json("Erro ao enviar telefones");
            }
        })
    })
});

//Inicia o túnel e ouve os verbos HTTP

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});