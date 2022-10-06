const express = require('express');
const router = express.Router();

const Solicitacao = require("../controllers/SolicitacaoController");
// solicitacoes é o nome do banco
// vw_solicitacoes é a tabela do banco
// é necessário colocar os exatos nomes conforme o DB e suas respectivas tabelas
// Solicitacao.listarSolicitacoes faz a comunicação com o controller que fará as ações que se deseja no DB
router.get("/solicitacoes/vw_solicitacoes", Solicitacao.listarSolicitacoes);
router.post("/solicitacoes/solicita_um_item", Solicitacao.criarSolicitacao);

router.post("/solicitacoes/funcionarios", Solicitacao.cadastrarFuncionario);
router.get("/solicitacoes/funcionarios", Solicitacao.listarFuncionarios);

module.exports = router;

