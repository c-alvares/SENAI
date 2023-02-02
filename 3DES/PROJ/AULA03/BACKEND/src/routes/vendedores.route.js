const express = require('express');

const router = express.Router();

const Vendedor = require('../controllers/vendedor.controller');

router.post('/cadastrarvendedor', Vendedor.createSailsman);
router.get('/buscarvendedores', Vendedor.readSailsmens);
router.get('/buscarvendedor/:id_vendedor', Vendedor.readSailsman)

module.exports = router;