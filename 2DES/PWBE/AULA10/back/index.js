// Responsável pela comunicação, solicitações e respostas
const express = require('express');
// "Firewall" responsável por liberar as portas
const cors = require('cors');
// Rota a ser utilizada
const solicitacao = require('./src/routes/solicitacoes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(solicitacao);

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});
