require('dotenv').config();
const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const entregadores = require('./src/routes/Entregadores.routes');
const pedidos = require('./src/routes/Pedidos.routes');

const app = express()
    .use(express.json())
    .use(cors())
    .use(entregadores)
    .use(pedidos)

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});