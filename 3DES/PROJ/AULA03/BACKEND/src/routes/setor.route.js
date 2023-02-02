const express = require('express');

const router = express.Router();

const Setor = require('../controllers/setor.controller');

router.post('/criarsetor', Setor.createSector);
router.get('/buscarsetores', Setor.readSectors);
router.get('/buscarsetor/:id_setor', Setor.readSector)

module.exports = router;