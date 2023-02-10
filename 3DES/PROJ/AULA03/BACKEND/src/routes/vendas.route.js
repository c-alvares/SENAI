const express = require('express');

const router = express.Router();

const Vendas = require('../controllers/vendas.controller');

router.post('/cadastrarvenda', Vendas.createSails);
router.get('/listarvendas', Vendas.readSails);
// router.get('/buscarvendadetalhada/:id', Vendas.detailedSail);

module.exports = router;