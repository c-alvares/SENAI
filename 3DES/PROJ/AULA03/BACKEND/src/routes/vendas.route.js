const express = require('express');

const router = express.Router();

const Vendas = require('../controllers/vendas.controller');

router.post('/cadastrarvenda', Vendas.createSails);
router.get('/listarvendas', Vendas.readSails);
router.get('/listarvenda/:id', Vendas.detailedSail);
router.delete('/excluirvenda/:id', Vendas.deleteSail);

module.exports = router;