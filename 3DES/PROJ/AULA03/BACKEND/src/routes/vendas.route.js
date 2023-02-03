const express = require('express');

const router = express.Router();

const Vendas = require('../controllers/vendas.controller');

// router.post('/cadastrarvenda', Vendas.createSail);
router.get('/listarvendas', Vendas.readSails);
// router.get('/buscarvendadetalhada/:id', Vendas.detailedSail);

module.exports = router;