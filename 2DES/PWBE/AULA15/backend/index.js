require('dotenv').config();
const PORT = process.env.PORT || 4000
const express = require('express');
const cors = require('cors');

const profissionais = require('./src/routes/profissionais.routes')
const consultas = require('./src/routes/consultas.routes')
const tratamentos = require('./src/routes/tratamentos.routes')

const app = express()
    .use(express.json())
    .use(cors())
    .use(profissionais)
    .use(consultas)
    .use(tratamentos)

app.listen(PORT, () => {
    console.log('Servido em execução na porta ' + PORT);
});