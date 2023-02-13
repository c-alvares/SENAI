const express = require('express');

const router = express.Router();

const Detalhes = require('../controllers/detalhes.controller');

router.post('/', Detalhes.createDetails);
router.get('/', Detalhes.readDetails);
router.get('/:id', Detalhes.detailedSail);

module.exports = router;