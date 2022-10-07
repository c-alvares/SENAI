const express = require('express');
const router = express.Router();

const Solicitacao = require("../controllers/SolicitacaoController");
const Funcionario = require("../controllers/funcionarioController");
const Departamento = require("../controllers/departamentoController");
const Produto = require("../controllers/produtoController");
// solicitacoes é o nome do banco(é uma boa prática)
// vw_solicitacoes é a tabela do banco(Pode ser colocada outra informação desde que faça sentido)
// É possível utilizar nomes iguais de "tabelas" desde que o verbo(tipo da rota) seja diferente
// é necessário colocar os exatos nomes conforme o DB e suas respectivas tabelas
// Solicitacao.listarSolicitacoes faz a comunicação com o controller que fará as ações que se deseja no DB
router.post("/solicitacoes/funcionarios", Funcionario.cadastrarFuncionario);
router.get("/solicitacoes/funcionarios", Funcionario.listarFuncionarios);

router.get("/solicitacoes/Departamentos", Departamento.listarDepartamento);
router.post("/solicitacoes/Departamentos", Departamento.cadastrarDepartamento);
router.delete("/solicitacoes/Departamentos", Departamento.deletarDepartamentoID);

router.get("/solicitacoes/Produtos", Produto.listarProduto);
router.get("/solicitacoes/Produtos/:Nome_produto", Produto.buscarProduto);
router.post("/solicitacoes/Produtos", Produto.cadastrarProduto);

router.get("/solicitacoes/vw_solicitacoes", Solicitacao.listarSolicitacoes);
router.post("/solicitacoes/solicita_um_item", Solicitacao.criarSolicitacao);

module.exports = router;