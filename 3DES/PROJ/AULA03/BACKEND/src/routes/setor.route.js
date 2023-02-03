const express = require('express');

const router = express.Router();

const Setor = require('../controllers/setor.controller');

router.post('/criarsetor', Setor.createSector);
router.post('/criarsetores', Setor.createSectors);
router.get('/buscarsetores', Setor.readSectors);
router.get('/buscarsetoreprodutos/:id', Setor.readSector);
router.get('/buscarsetorevendedores/:id', Setor.readSectorSailsman);

module.exports = router;