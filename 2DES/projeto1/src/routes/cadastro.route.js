const express = require('express');
const router = express.Router();

const Cadastro = require('../controllers/cadastro.controller');

router.post("/cadastramento/", Cadastro.cadastrarPessoas);
router.get("/cadastramento/", Cadastro.listarPessoas);

module.exports = router;