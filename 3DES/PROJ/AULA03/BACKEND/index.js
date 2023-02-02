const express = require('express');
const cors = require('cors');

const setor = require('./src/routes/setor.route');
const produtos = require('./src/routes/produtos.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(setor);
app.use(produtos);

app.listen(3000, () => { console.log("Rodando"); })