const express = require('express');

const router = express.Router();

const LancamentosController = require("./controllers/LancamentosController");

router.get("/lancamentos", LancamentosController.listarLancamentos);
router.post("/lancamentos/", LancamentosController.cadastrarLancamento);

router.get("/lancamentos/:datas", LancamentosController.filtrarData);


module.exports = router;