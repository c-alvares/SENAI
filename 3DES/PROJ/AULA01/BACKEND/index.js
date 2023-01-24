require('dotenv').config();
const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const entregadores = require('./src/routes/Entregadores.routes');

const app = express()
    .use(express.json())
    .use(cors())
    .use(entregadores)

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});