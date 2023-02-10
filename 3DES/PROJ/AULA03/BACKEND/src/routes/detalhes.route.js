const express = require('express');

const router = express.Router();

const Detalhes = require('../controllers/detalhes.controller');

router.post('/', Detalhes.createDetails);
// router.get('/', Detalhes.);
// router.get('//:id', Detalhes.);
// router.get('//:id', Detalhes.);

module.exports = router;