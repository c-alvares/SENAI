const express = require('express');

const router = express.Router();

const LancamentosController = require("./controllers/LancamentosController");

router.get("/lancamentos", LancamentosController.listarLancamentos);
router.post("/lancamentos/cadastrar", LancamentosController.cadastrarLancamento);


module.exports = router;