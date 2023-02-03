const express = require('express');
const cors = require('cors');

const setor = require('./src/routes/setor.route');
const produtos = require('./src/routes/produtos.route');
const vendedores = require('./src/routes/vendedores.route')
const vendas = require('./src/routes/vendas.route');
const detalhes = require('./src/routes/detalhes.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(setor);
app.use(produtos);
app.use(vendedores);
app.use(vendas);
app.use(detalhes);

app.listen(3000, () => { console.log("Rodando"); })