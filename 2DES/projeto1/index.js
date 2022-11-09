require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const cadastrar = require('./src/routes/cadastro')

const app = express()
    .use(express.json())
    .use(cors())
    .use(cadastrar)

app.listen(PORT, () => {
    console.log('Servido em execução na porta ' + PORT);
});