require('dotenv').config();
const PORT = process.env.PORT || 3000
// Responsável pela comunicação, solicitações e respostas
const express = require('express');
// "Firewall" responsável por liberar as portas
const cors = require('cors');
// Rota a ser utilizada
const solicitacao = require('./src/routes/rotas');

const app = express();
app.use(express.json())
    .use(cors())
    .use(solicitacao)
    .listen(3000, () => {
    console.log("Respondendo na porta " + PORT);
});
