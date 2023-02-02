const express = require('express');

const router = express.Router();

const Produto = require('../controllers/produtos.controller');

router.post('/cadastrarproduto', Produto.createProduct);
router.get('/buscarprodutos', Produto.readProducts);
router.get('/buscarproduto/:id_produto', Produto.readProduct)

module.exports = router;